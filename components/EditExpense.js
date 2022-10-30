import { View, StyleSheet } from "react-native"
import React from "react"
import { Colors } from "../Styles"
import CommonPressable from "./CommonPressable"
import {
  deleteExpenseFromDB,
  markImportantInDB,
  markUnimportantInDB,
} from "../firebase/firestore"

export default function EditExpense({ navigation, route }) {
  const { expenseId, important } = route.params

  const handleMarkImportant = () => {
    markImportantInDB(expenseId)
    navigation.pop()
  }

  const handleMarkUnimportant = () => {
    markUnimportantInDB(expenseId)
    navigation.pop()
  }

  const handleDelete = () => {
    deleteExpenseFromDB(expenseId)
    navigation.pop()
  }
  return (
    <View style={Styles.container}>
      {!important && (
        <CommonPressable
          text="Mark as important"
          customStyle={{ minWidth: 150 }}
          onPress={handleMarkImportant}
        />
      )}
      {important && (
        <CommonPressable
          text="Mark as unimportant"
          customStyle={{ minWidth: 170 }}
          onPress={handleMarkUnimportant}
        />
      )}
      <CommonPressable text="Delete" onPress={handleDelete} />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.purple,
    paddingTop: 30,
  },
})
