import React from "react";
import { View, Text, StyleSheet } from "react-native";

type TaskItemProps = {
  titulo: string;
};

export default function TaskItem({ titulo }: TaskItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    margin: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    textAlign: "center",
  },
});
