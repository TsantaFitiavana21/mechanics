import React, { useState } from "react"
import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"
import { isLoggedIn } from "../../utils"
import { Login } from "../login/Login"
import { JobItem } from "./components/JobItem"
import { COLOR } from "../../constants"
import Logout from "../../assets/Icons/Logout.svg"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Snackbar } from "../../components/Snackbar"

export const Home = ({ navigation }) => {
    const [text, setText] = useState("")
    const [jobs, setJobs] = useState(["Task 1", "Task 2"])
    const [showSnackbar, setShowSnackbar] = useState(false)

    const handleAdd = () => {
        setJobs([...jobs, text])
        setText("")
    }

    const handleLogout = () => {
        AsyncStorage.removeItem("connected")
        setShowSnackbar(!showSnackbar)
        navigation.navigate("Login")
    }

    // if (!isLoggedIn()) {
    //     return <Login />
    // }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Home</Text>
                <TouchableOpacity onPress={handleLogout}>
                    <Logout width={30} height={30} />
                </TouchableOpacity>
            </View>
            <TextInput style={styles.search} placeholder="Search for jobs" />

            {jobs.map((item, index) => {
                return <JobItem key={index} text={item} />
            })}

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeJob}
            >
                <TextInput
                    style={styles.textAdd}
                    placeholder="Add a job"
                    value={text}
                    onChangeText={(text) => setText(text)}
                />
                <TouchableOpacity onPress={handleAdd}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}> + </Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

            {showSnackbar && (
                <Snackbar
                    message={"Logout successfully"}
                    actionText="Dismiss"
                    onActionPress={() => {
                        // Implement the action logic here.
                        setShowSnackbar(!showSnackbar)
                    }}
                    duration={3000}
                    position="bottom"
                    backgroundColor={COLOR.success}
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
        backgroundColor: "white",
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 34,
        fontWeight: "bold",
    },
    search: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 6,
    },
    writeJob: {
        position: "absolute",
        bottom: 60,
        width: "110%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    textAdd: {
        paddingVertical: 15,
        width: 250,
        paddingHorizontal: 15,
        backgroundColor: "white",
        borderRadius: 8,
        fontSize: 16,

        elevation: 3, // Adjust the elevation based on your preference
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    addWrapper: {
        width: 55,
        height: 55,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: COLOR.neutral,
    },
    addText: { color: "white", fontSize: 28 },
})
