import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet } from "react-native"
import { Colors } from "./Styles"
import Home from "./components/Home"
import AddExpense from "./components/AddExpense"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: Colors.deepPurple },
          headerTintColor: Colors.white,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add Expense" component={AddExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
