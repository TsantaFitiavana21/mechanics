import { StyleSheet } from "react-native"

export const useModalAddStyle = () => {
    return StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        modalContent: {
            padding: 20,
            backgroundColor: "#fff",
            borderRadius: 10,
            alignItems: "center",
            width: "90%",
            maxHeight: 750
        },
        modalHeader: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: 20
        },
        modalTitle: {
            fontSize: 25,
            fontWeight: "bold",
        },
        modalClose: {
            fontSize: 18,
        },
        textInputContainer: {
            paddingVertical: 5
        },
        label: {
            fontSize: 17,
            fontWeight: "bold",
            paddingBottom: 5
        },
        textInput: {
            borderColor: 'grey',
            borderRadius: 8,
            height: 50,
            borderWidth: 1,
            paddingHorizontal: 10
        },
        dropdownContainer: {
            paddingVertical: 5
        },
        dropdown: {
            height: 50,
            width: 310,
            borderColor: "gray",
            borderWidth: 0.5,
            borderRadius: 8,
            paddingHorizontal: 8,
        },
        btnContainer: {
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
    })
}
