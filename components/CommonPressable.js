import { View, Text, Pressable, StyleSheet } from "react-native"
import React from "react"
import { Colors } from "../Styles"

export default function CommonPressable(props) {
  const { text, onPress } = props
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.8 : 1 },
        Styles.pressable,
      ]}
      onPress={onPress}
    >
      <Text style={Styles.text}>{text}</Text>
    </Pressable>
  )
}

const Styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: 16,
  },
  pressable: {
    backgroundColor: Colors.deepPurple,
    borderRadius: 5,
    minWidth: 120,
    minHeight: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
})
