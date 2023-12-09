import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Login } from "./pages/login/Login"
import { QueryClientProvider, QueryClient } from "react-query"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "./pages/home/Home"
import { isLoggedIn } from "./utils"

const Stack = createNativeStackNavigator()

export default function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Stack.Navigator
                        initialRouteName={!isLoggedIn() ? "Login" : "Home"}
                    >
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </View>
            </NavigationContainer>
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
