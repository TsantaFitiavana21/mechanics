import {
    Modal,
    ScrollView,
    TextInput,
    TouchableOpacity,
    View,
    Text,
} from "react-native"
import { CustomSelect } from "../../../components/CustomSelect"
import { CustomButton } from "../../../components/CustomButton"
import { useModalAddStyle } from "../styles/useModalAddStyle"
import { COLOR } from "../../../constants"
import { BusService } from "../../../services/BusService"
import { useEffect, useState } from "react"

export const AddJobModal = ({ isModalVisible, toggleModal }) => {
    const [buses, setBuses] = useState([])

    const styles = useModalAddStyle()
    const busService = new BusService()

    const data = [
        { label: "Item 1", value: "1" },
        { label: "Item 2", value: "2" },
        { label: "Item 3", value: "3" },
        { label: "Item 4", value: "4" },
        { label: "Item 5", value: "5" },
        { label: "Item 6", value: "6" },
        { label: "Item 7", value: "7" },
        { label: "Item 8", value: "8" },
    ]

    useEffect(() => {
        busService.getBus().then((data) => setBuses(data.data))
    }, [])

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Add a job</Text>
                        <TouchableOpacity onPress={toggleModal}>
                            <Text style={styles.modalClose}>X</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.textInputContainer}>
                            <Text style={styles.label}>Description</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Add a description"
                            />
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.label}>Type</Text>
                            <CustomSelect
                                items={data}
                                style={styles.dropdown}
                            />
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.label}>Status</Text>
                            <CustomSelect
                                readOnly
                                items={[{ label: "Pending", value: "pending" }]}
                                style={styles.dropdown}
                            />
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.label}>Bus Number</Text>
                            {buses.length > 1 && (
                                <CustomSelect
                                    items={buses}
                                    style={styles.dropdown}
                                    labelField="number"
                                    value="bus_id"
                                />
                            )}
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.label}>Category</Text>
                            <CustomSelect
                                items={data}
                                style={styles.dropdown}
                            />
                        </View>

                        <View style={styles.textInputContainer}>
                            <Text style={styles.label}>Vendors</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Add a vendor"
                            />
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.label}>Schedule</Text>
                            <CustomSelect
                                items={data}
                                style={styles.dropdown}
                            />
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.label}>Priority</Text>
                            <CustomSelect
                                items={data}
                                style={styles.dropdown}
                            />
                        </View>

                        <View style={styles.textInputContainer}>
                            <Text style={styles.label}>Due date</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Add a vendor"
                            />
                        </View>

                        <View style={styles.textInputContainer}>
                            <Text style={styles.label}>Location</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Add a location"
                            />
                        </View>

                        <View style={styles.btnContainer}>
                            <CustomButton
                                backgroundColor={COLOR.neutral}
                                title={"Cancel"}
                                onPress={toggleModal}
                            />
                            <CustomButton title={"Submit"} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}
