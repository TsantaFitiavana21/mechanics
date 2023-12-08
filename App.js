import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Login } from "./pages/login/Login"
import { QueryClientProvider, QueryClient } from "react-query"

export default function App() {
  const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Login />
            </View>
        </QueryClientProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
})
