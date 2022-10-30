import { View, StyleSheet } from "react-native"
import React, { useEffect, useState } from "react"
import { Colors } from "../Styles"
import ExpenseList from "./ExpenseList"
import { collection, onSnapshot } from "firebase/firestore"
import { firestore } from "../firebase/firebase-setup"

export default function ImportantExpenses() {
  const [importantExpenses, setImportantExpenses] = useState([])

  useEffect(() => {
    const unsubscrib = onSnapshot(
      collection(firestore, "Expenses"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setAllExpenssetImportantExpenseses([])
        } else {
          const expenses = []
          querySnapshot.forEach((snapDoc) => {
            if (snapDoc.data().important) {
              let data = snapDoc.data()
              expenses.push({ ...data, id: snapDoc.id })
            }
          })
          setImportantExpenses(expenses)
        }
      }
    )

    return unsubscrib
  }, [])
  return (
    <View style={Styles.container}>
      <ExpenseList expenses={importantExpenses} />
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
