import DateTimePicker from "@react-native-community/datetimepicker"
import { useState } from "react"
import { TextInput, TouchableOpacity, View } from "react-native"

export const CustomDatePicker = ({onChange, value}) => {
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)

    const handelChange = (_, selectedDate) => {
        const currentDate = selectedDate || date
        setShowPicker(Platform.OS === "ios") // Close the picker on iOS automatically
        setDate(currentDate)
        onChange(selectedDate)
    }

    const showDatePicker = () => {
        setShowPicker(true)
    }

    return (
        <View>
            <TouchableOpacity onPress={showDatePicker}>
                <TextInput
                    style={{
                        borderColor: "grey",
                        borderRadius: 8,
                        height: 50,
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        color: 'black'
                    }}
                    value={date.toLocaleDateString()}
                    editable={false}
                />
            </TouchableOpacity>

            {showPicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={value ?? date}
                    mode="date"
                    display="default"
                    onChange={handelChange}
                />
            )}
        </View>
    )
}
