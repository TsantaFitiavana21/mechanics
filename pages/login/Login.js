// Login.js
import React, { useState } from "react"
import { View, Image, TextInput, StyleSheet } from "react-native"
import { CustomButton } from "../../components/CustomButton"
import { Snackbar } from "../../components/Snackbar"
import { isEmpty, isLoggedIn } from "../../utils"
import { LoginService } from "../../services/LoginService"
import { COLOR } from "../../constants"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Home } from "../home/Home"

export const Login = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [snackbarDetail, setSnackbarDetail] = useState({
        color: COLOR.neutral,
        show: false,
        text: "This is a snackbar",
    })

    const handleLogin = async () => {
        setIsLoading(true)

        if (isEmpty(username) || isEmpty(password)) {
            setSnackbarDetail({
                text: "All fields are required",
                color: COLOR.error,
                show: !snackbarDetail.show,
            })
            setIsLoading(false)
        } else {
            const data = await LoginService.login(username, password)

            if (data.data.status == "fail") {
                setIsLoading(false)

                setSnackbarDetail({
                    color: COLOR.error,
                    text: "User not found",
                    show: !snackbarDetail.show,
                })
            } else if (data.data.status == "success") {
                // Set connected value to true in AsyncStorage
                await AsyncStorage.setItem("connected", "true")
                await AsyncStorage.setItem("username", data.data.username)

                navigation.navigate("Home")
            } else {
                setIsLoading(false)

                console.log("Login failed. Error:", data.error)
            }
        }
    }    

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../assets/logo.png")}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <CustomButton
                title={"Login"}
                isLoading={isLoading}
                onPress={handleLogin}
                backgroundColor={"grey"}
                width={"80%"}
            />

            {snackbarDetail.show && (
                <Snackbar
                    message={snackbarDetail.text}
                    actionText="Dismiss"
                    onActionPress={() => {
                        // Implement the action logic here.
                        setSnackbarDetail({
                            ...snackbarDetail,
                            show: !snackbarDetail.show,
                        })
                    }}
                    duration={3000}
                    position="bottom"
                    backgroundColor={snackbarDetail.color}
                    textColor="white"
                    actionTextColor="white"
                    containerStyle={{ marginHorizontal: 12 }}
                    messageStyle={{}}
                    actionTextStyle={{}}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    logo: {
        width: 300,
        height: 150,
        resizeMode: "contain",
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "gray",
        borderBottomWidth: 1,
        marginBottom: 32,
        padding: 8,
    },
    btn: {
        backgroundColor: "red",
    },
})
