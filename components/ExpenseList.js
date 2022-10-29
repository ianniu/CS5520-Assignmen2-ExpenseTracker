import { View, Text, FlatList, StyleSheet, Pressable } from "react-native"
import React from "react"
import { Colors } from "../Styles"
const expenseData = [
  { title: "coffee", id: "1", expense: "20" },
  { title: "book", id: "2", expense: "100" },
]

export default function ExpenseList() {
  const renderItem = ({ item, index }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.8 : 1 },
          Styles.itemWrapper,
        ]}
      >
        <Text style={Styles.itemTitle}>{item.title}</Text>
        <View style={Styles.expenseWrapper}>
          <Text style={Styles.expenseText}>{item.expense}</Text>
        </View>
      </Pressable>
    )
  }

  return <FlatList data={expenseData} renderItem={renderItem} />
}

const Styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: Colors.deepPurple,
    marginBottom: 15,
    minHeight: 50,
    alignItems: "center",
    width: 320,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTitle: {
    color: Colors.lightestPurple,
    fontSize: 16,
    marginLeft: 12,
    fontWeight: "600",
  },
  expenseWrapper: {
    marginRight: 12,
    backgroundColor: Colors.white,
    width: 70,
    alignItems: "center",
    borderRadius: 5,
  },
  expenseText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.deepPurple,
    marginVertical: 2,
  },
})
