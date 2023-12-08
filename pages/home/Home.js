import React, { useState } from "react"
import {
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

export const Home = () => {
    const [jobs, setJobs] = useState(["Task 1", "Task 2"])

    if (!isLoggedIn()) {
        return <Login />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <TextInput style={styles.search} placeholder="Search for jobs" />

            {jobs.map((item, index) => {
                return <JobItem key={index} text={`Job ${index + 1}`} />
            })}

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeJob}
            >
                <TextInput style={styles.textAdd} placeholder="Add a job" />
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}> + </Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
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
