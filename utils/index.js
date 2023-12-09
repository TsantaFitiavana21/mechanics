import AsyncStorage from '@react-native-async-storage/async-storage';

export const isEmpty = (value) => {
    return value.lenght == 0 || value == ""
}

export const isLoggedIn = async () => {
    try {
        // Check the value of 'connected' in AsyncStorage
        const isConnected = await AsyncStorage.getItem("connected")

        // If the user is logged in, navigate to the Home screen
        if (isConnected === "true") {
            return true
        }

        return false
    } catch (error) {
        console.error("Error checking login status:", error)
        // Handle the error appropriately
    }
}


