import { useState } from "react"
import { StyleSheet } from "react-native"
import { Dropdown } from "react-native-element-dropdown"

export const CustomSelect = ({
    onChange,
    items,
    style,
    isSearch,
    readOnly,
    labelField = "label",
    valueField = "value",
}) => {
    const [isFocus, setIsFocus] = useState(false)
    const [value, setValue] = useState()

    return (
        <Dropdown
            style={[style, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={items}
            search={isSearch}
            maxHeight={300}
            disable={readOnly}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            labelField={labelField}
            valueField={valueField}
            placeholder={!isFocus ? "Select item" : "..."}
            searchPlaceholder="Search..."
            value={readOnly ? items[0] : value}
            onChange={(value) => {
                setIsFocus(false)
                setValue(value)
                onChange(value.value)
            }}
        />
    )
}

const styles = StyleSheet.create({
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})
