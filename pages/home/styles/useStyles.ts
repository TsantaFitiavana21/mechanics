import { StyleSheet } from "react-native"
import { COLOR } from "../../../constants"

export const useStyles = () => {
    return StyleSheet.create({
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
            bottom: 40,
            left: 160,
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
}
