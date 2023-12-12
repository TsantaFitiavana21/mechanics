import { StyleSheet, Text, View } from "react-native"
import { COLOR } from "../../../constants"

export const JobItem = ({ job }) => {
    const DESC_LENGTH = 34

    const sliceDescription = (description) => {
        if (description.length > DESC_LENGTH) {
            return description.slice(0, DESC_LENGTH) + " ..."
        }

        return description
    }

    return (
        <View style={styles.container}>
            {/* <View style={styles.rectangle}></View> */}
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                    {sliceDescription(job.job_description)}
                </Text>
                <View style={styles.statusContainer}>
                    <Text style={styles.status}>Status: {job.job_status}</Text>
                    <Text style={styles.type}>Type: {job.job_type}</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <Text style={styles.priority}>
                        Priority: {job.job_priority}
                    </Text>
                    <Text style={styles.category}>
                        Category: {job.job_category}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,

        elevation: 3, // Adjust the elevation based on your preference
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        height: "auto",
    },
    rectangle: {
        height: 35,
        width: 35,
        backgroundColor: COLOR.neutral,
        borderRadius: 50,
    },
    description: {
        fontSize: 20,
        fontWeight: "bold",
    },
    descriptionContainer: {
        flex: 1,
        gap: 5,
    },
    statusContainer: {
        flexDirection: "row",
        gap: 10,
    },
    categoryContainer: {
        flexDirection: "row",
        gap: 10,
    },
})
