import { StyleSheet, Text, View } from "react-native"
import { COLOR } from "../../../constants"

export const JobItem = ({ text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.rectangle}></View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginVertical: 10,
        padding: 10,
        borderRadius: 6,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        
        elevation: 3, // Adjust the elevation based on your preference
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    rectangle: {
        height: 35,
        width: 35,
        backgroundColor: COLOR.neutral,
        borderRadius: 50,
    },
    text: {
        fontSize: 16,
    },
})
