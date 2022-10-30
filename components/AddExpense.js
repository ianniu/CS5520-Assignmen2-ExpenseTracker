import { View, Text, StyleSheet, TextInput, Alert } from "react-native"
import React, { useState } from "react"
import { Colors } from "../Styles"
import CommonPressable from "./CommonPressable"
import { addExpenseToDB } from "../firebase/firestore"

export default function AddExpense({ navigation, route }) {
  const { important } = route.params
  const [amount, setAmount] = useState("")
  const [desc, setDesc] = useState("")

  const validateInput = () => {
    if (amount === "" || isNaN(amount) || parseInt(amount) < 0) {
      createAmountAlert()
      return false
    }
    if (desc === "") {
      createDescAlert()
      return false
    }
    return true
  }

  const createAmountAlert = () => {
    Alert.alert(
      "Invalid amount!",
      "Amount should be a number greater than 0!"[
        {
          text: "Okay",
          onPress: () => setAmount(""),
          style: "destructive",
        }
      ]
    )
  }

  const createDescAlert = () => {
    Alert.alert(
      "Invalid description!",
      "Description should not be empty!"[
        {
          text: "Okay",
          style: "destructive",
        }
      ]
    )
  }

  const handleSubmit = () => {
    validateInput()
    const data = {
      amount: parseInt(amount),
      description: desc,
      important: important,
    }
    addExpenseToDB(data)
    navigation.pop()
  }

  const handleCancel = () => {
    navigation.pop()
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Your Expense</Text>
      <View style={Styles.inputWrapper}>
        <Text style={Styles.subTitle}>Amount</Text>
        <TextInput
          style={Styles.amountInput}
          keyboardType={"numeric"}
          onChangeText={setAmount}
        />
      </View>
      <View style={Styles.inputWrapper}>
        <Text style={Styles.subTitle}>Description</Text>
        <TextInput
          style={Styles.descInput}
          multiline={true}
          onChangeText={(text) => {
            setDesc(text.trim())
          }}
          textAlignVertical="top"
        />
      </View>
      <View style={Styles.pressableWrapper}>
        <CommonPressable text="Cancel" onPress={handleCancel} />
        <CommonPressable text="Submit" onPress={handleSubmit} />
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
