import {
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    View
} from "react-native"
import { COLOR } from "../constants"

export const CustomButton = ({
    onPress,
    title,
    backgroundColor,
    size,
    width,
    isLoading,
}) => (
    <TouchableOpacity
        onPress={onPress}
        disabled={isLoading}
        style={[
            styles.appButtonContainer,
            size === "sm" && {
                paddingHorizontal: 8,
                paddingVertical: 6,
                elevation: 6,
            },
            backgroundColor && { backgroundColor },
            width && { width },
        ]}
    >
        <View style={styles.btnContainer}>
            {isLoading && <ActivityIndicator color={"white"} />}
            <Text
                style={[
                    styles.appButtonText,
                    size === "sm" && { fontSize: 14 },
                ]}
            >
                {" "}
                {title}{" "}
            </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 7
    }
})
