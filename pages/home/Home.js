import React, { useEffect, useState } from "react"
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"
import { JobItem } from "./components/JobItem"
import { COLOR } from "../../constants"
import Logout from "../../assets/Icons/Logout.svg"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Snackbar } from "../../components/Snackbar"
import { JobService } from "../../services/JobService"
import { useStyles } from "./styles/useStyles"

export const Home = ({ navigation }) => {
    const [text, setText] = useState("")
    const [jobs, setJobs] = useState([])
    const [userConnected, setUserConnected] = useState()
    const [showSnackbar, setShowSnackbar] = useState(false)

    const styles = useStyles()

    const handleAdd = () => {
        setJobs([...jobs, text])
        setText("")
    }

    const handleLogout = () => {
        AsyncStorage.removeItem("connected")
        setShowSnackbar(!showSnackbar)
        navigation.navigate("Login")
    }

    useEffect(() => {
        AsyncStorage.getItem("username").then((data) => {
            setUserConnected(data)
        })
    }, [])

    useEffect(() => {
        if (userConnected) {
            JobService.getJobs(userConnected).then((data) => {
                setJobs(data.data.jobs)
            })
        }
    }, [userConnected])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Job List</Text>
                <TouchableOpacity onPress={handleLogout}>
                    <Logout width={30} height={30} />
                </TouchableOpacity>
            </View>
            <TextInput style={styles.search} placeholder="Search for jobs" />

            <ScrollView showsVerticalScrollIndicator={false}>
                {jobs.length > 0 &&
                    jobs.map((item, index) => {
                        return <JobItem key={index} job={item} />
                    })}
            </ScrollView>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeJob}
            >
                {/* <TextInput
                    style={styles.textAdd}
                    placeholder="Add a job"
                    value={text}
                    onChangeText={(text) => setText(text)}
                /> */}
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

