import { View, StyleSheet } from "react-native"
import React from "react"
import { Colors } from "../Styles"
import ExpenseList from "./ExpenseList"

export default function AllExpenses() {
  return (
    <View style={Styles.container}>
      <ExpenseList />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.purple,
    paddingTop: 30,
  },
})
