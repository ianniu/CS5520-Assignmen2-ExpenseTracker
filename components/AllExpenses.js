import { View, StyleSheet } from "react-native"
import React, { useEffect, useState } from "react"
import { Colors } from "../Styles"
import ExpenseList from "./ExpenseList"
import { collection, onSnapshot } from "firebase/firestore"
import { firestore } from "../firebase/firebase-setup"

export default function AllExpenses() {
  const [allExpenses, setAllExpenses] = useState([])

  useEffect(() => {
    const unsubscrib = onSnapshot(
      collection(firestore, "Expenses"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setAllExpenses([])
        } else {
          setAllExpenses(
            querySnapshot.docs.map((snapDoc) => {
              let data = snapDoc.data()
              data = { ...data, id: snapDoc.id }
              return data
            })
          )
        }
      }
    )

    return unsubscrib
  }, [])

  return (
    <View style={Styles.container}>
      <ExpenseList expenses={allExpenses} />
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
