import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Login } from "./pages/login/Login"
import { QueryClientProvider, QueryClient } from "react-query"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "./pages/home/Home"

const Stack = createNativeStackNavigator()

export default function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Stack.Navigator
                        initialRouteName={"Login"}
                    >
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen name="Home" component={Home} />
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
