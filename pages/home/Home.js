import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { isLoggedIn } from "../../utils"
import { Login } from "../login/Login"
import { JobItem } from "./components/JobItem"

export const Home = () => {
    const [jobs, setJobs] = useState(["Task 1", "Task 2"]);

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
})
