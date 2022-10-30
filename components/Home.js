import { Text, Pressable, StyleSheet } from "react-native"
import React from "react"
import { Colors } from "../Styles"
import AllExpenses from "./AllExpenses"
import ImportantExpenses from "./ImportantExpenses"
import { AntDesign, FontAwesome } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

const PlusSign = () => {
  return <Text style={Styles.plusSign}>+</Text>
}

export default function Home(props) {
  const { navigation } = props
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "All Expenses")
            return <FontAwesome name="dollar" size={size} color={color} />
          else if (route.name === "Important Expenses")
            return <AntDesign name="exclamation" size={size} color={color} />
        },
        tabBarActiveTintColor: Colors.yellow,
        tabBarInactiveTintColor: Colors.grey,
        tabBarStyle: { backgroundColor: Colors.deepPurple },
        headerTintColor: Colors.white,
        headerStyle: { backgroundColor: Colors.deepPurple },
      })}
    >
      <Tab.Screen
        name="All Expenses"
        component={AllExpenses}
        options={({ route }) => {
          return {
            headerRight: () => (
              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
                onPress={() => {
                  navigation.navigate("Add Expense", { important: false })
                }}
              >
                <PlusSign />
              </Pressable>
            ),
          }
        }}
      />
      <Tab.Screen
        name="Important Expenses"
        component={ImportantExpenses}
        options={({ route }) => {
          return {
            headerRight: () => (
              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
                onPress={() => {
                  navigation.navigate("Add Expense", { important: true })
                }}
              >
                <PlusSign />
              </Pressable>
            ),
          }
        }}
      />
    </Tab.Navigator>
  )
}

const Styles = StyleSheet.create({
  plusSign: {
    color: Colors.white,
    marginRight: 20,
    fontSize: 28,
    fontWeight: "300",
  },
})
