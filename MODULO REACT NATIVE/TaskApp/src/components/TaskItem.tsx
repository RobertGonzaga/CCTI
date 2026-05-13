import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type TaskItemProps = {
  titulo: string;
  concluida: boolean;
  onConcluir: () => void;
  onExcluir: () => void;
  onEditar: () => void;
};

export default function TaskItem({ titulo, concluida, onConcluir, onExcluir, onEditar }: TaskItemProps) {
  return (
    <View style={styles.card}>
      <Text style={[styles.title, concluida && styles.concluida]}>{titulo}</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={[styles.button, styles.editButton]} onPress={onEditar}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.doneButton]} onPress={onConcluir}>
          <Text style={styles.buttonText}>{concluida ? "Desfazer" : "Concluir"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={onExcluir}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    elevation: 3,
  },

  title: {
    fontSize: 17,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 16,
  },

  concluida: {
    textDecorationLine: "line-through",
    color: "#94A3B8",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },

  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },

  editButton: {
    backgroundColor: "#3B82F6",
  },

  doneButton: {
    backgroundColor: "#10B981",
  },

  deleteButton: {
    backgroundColor: "#EF4444",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 13,
  },
});
