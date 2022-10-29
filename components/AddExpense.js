import { View, Text, StyleSheet, TextInput } from "react-native"
import React from "react"
import { Colors } from "../Styles"
import CommonPressable from "./CommonPressable"

export default function AddExpense(props) {
  const { important } = props
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Your Expense</Text>
      <View style={Styles.inputWrapper}>
        <Text style={Styles.subTitle}>Amount</Text>
        <TextInput style={Styles.amountInput} keyboardType={"numeric"} />
      </View>
      <View style={Styles.inputWrapper}>
        <Text style={Styles.subTitle}>Description</Text>
        <TextInput style={Styles.descInput} multiline={true} />
      </View>
      <View style={Styles.pressableWrapper}>
        <CommonPressable text="Cancel" />
        <CommonPressable text="Submit" />
      </View>
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
    paddingTop: 100,
  },
  title: {
    color: Colors.white,
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 14,
  },
  inputWrapper: {
    alignItems: "flex-start",
    marginTop: 20,
  },
  subTitle: {
    color: Colors.deepPurple,
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "600",
  },
  amountInput: {
    width: 320,
    backgroundColor: Colors.lightPurple,
    borderRadius: 5,
    padding: 10,
    color: Colors.white,
  },
  descInput: {
    width: 320,
    backgroundColor: Colors.lightPurple,
    borderRadius: 5,
    padding: 10,
    paddingTop: 10,
    minHeight: 120,
  },
  pressableWrapper: {
    flexDirection: "row",
  },
})
