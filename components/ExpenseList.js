import { View, Text, FlatList, StyleSheet, Pressable } from "react-native"
import React from "react"
import { Colors } from "../Styles"
import { useNavigation } from "@react-navigation/native"

export default function ExpenseList(props) {
  const { expenses } = props
  const navigation = useNavigation()
  const renderItem = ({ item, index }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.8 : 1 },
          Styles.itemWrapper,
        ]}
        onPress={() => {
          navigation.navigate("Edit Expense", {
            expenseId: item.id,
            important: item.important,
          })
        }}
      >
        <Text style={Styles.itemTitle}>{item.description}</Text>
        <View style={Styles.expenseWrapper}>
          <Text style={Styles.expenseText}>{item.amount}</Text>
        </View>
      </Pressable>
    )
  }

  return <FlatList data={expenses} renderItem={renderItem} />
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
