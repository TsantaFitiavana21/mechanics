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
import { useData } from "../hooks/useData"
import { CustomDatePicker } from "../../../components/CustomDatePicker"

export const AddJobModal = ({ isModalVisible, toggleModal }) => {
    const [buses, setBuses] = useState([])

    const {
        job_priorities,
        job_schedules,
        job_status,
        job_types,
        job_categories,
    } = useData()

    const [job, setJob] = useState({
        description: "",
        type: "",
        status: job_status[0],
        bus_number: "",
        category: "",
        vendors: "",
        schedule: "",
        priority: "",
        due_date: "",
        location: "",
    })

    const styles = useModalAddStyle()
    const busService = new BusService()

    

    const handleInputChange = (inputName, text) => {
        setJob((prevValues) => ({
            ...prevValues,
            [inputName]: text,
        }))
    }

    const handleSubmit = () => {
        console.log(job)
    }

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
                                onChangeText={(text) =>
                                    handleInputChange("description", text)
                                }
                            />
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.label}>Type</Text>
                            <CustomSelect
                                items={job_types}
                                style={styles.dropdown}
                                onChange={(value) =>
                                    handleInputChange("type", value)
                                }
                            />
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.label}>Status</Text>
                            <CustomSelect
                                readOnly
                                items={job_status}
                                style={styles.dropdown}
                                onChange={(value) =>
                                    handleInputChange("status", value)
                                }
                            />
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.label}>Bus Number</Text>
                            {buses.length > 1 && (
                                <CustomSelect
                                    items={buses}
                                    style={styles.dropdown}
                                    labelField="number"
                                    valueField="bus_id"
                                    onChange={(value) =>
                                        handleInputChange("bus_number", value)
                                    }
                                />
                            )}
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.label}>Category</Text>
                            <CustomSelect
                                items={job_categories}
                                style={styles.dropdown}
                                onChange={(value) =>
                                    handleInputChange("category", value)
                                }
                            />
                        </View>

                        <View style={styles.textInputContainer}>
                            <Text style={styles.label}>Vendors</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Add a vendor"
                                onChangeText={(text) =>
                                    handleInputChange("vendors", text)
                                }
                            />
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.label}>Schedule</Text>
                            <CustomSelect
                                items={job_schedules}
                                style={styles.dropdown}
                                onChange={(value) =>
                                    handleInputChange("schedule", value)
                                }
                            />
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.label}>Priority</Text>
                            <CustomSelect
                                items={job_priorities}
                                style={styles.dropdown}
                                onChange={(value) =>
                                    handleInputChange("priority", value)
                                }
                            />
                        </View>

                        <View style={styles.textInputContainer}>
                            <Text style={styles.label}>Due date</Text>
                            <CustomDatePicker
                                onChange={(date) =>
                                    handleInputChange("due_date", date)
                                }
                            />
                        </View>

                        <View style={styles.textInputContainer}>
                            <Text style={styles.label}>Location</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Add a location"
                                onChangeText={(text) => handleInputChange('location', text)}
                            />
                        </View>

                        <View style={styles.btnContainer}>
                            <CustomButton
                                backgroundColor={COLOR.neutral}
                                title={"Cancel"}
                                onPress={toggleModal}
                            />
                            <CustomButton
                                title={"Submit"}
                                onPress={handleSubmit}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}
