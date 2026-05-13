import React, { useEffect, useState } from "react";

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@taskapp:tarefas";

export default function NewTask({ route, navigation }: any) {
  const tarefa = route.params?.tarefa;

  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    if (tarefa) {
      setTitulo(tarefa.titulo);
    }
  }, [tarefa]);

  const salvarTarefa = async () => {
    if (titulo.trim() === "") {
      Alert.alert("Atenção", "Digite o título da tarefa.");

      return;
    }

    try {
      const dadosSalvos = await AsyncStorage.getItem(STORAGE_KEY);

      const tarefas = dadosSalvos ? JSON.parse(dadosSalvos) : [];

      let tarefasAtualizadas = [];

      if (tarefa) {
        tarefasAtualizadas = tarefas.map((item: any) => (item.id === tarefa.id ? { ...item, titulo } : item));
      } else {
        const novaTarefa = {
          id: Date.now().toString(),
          titulo,
          concluida: false,
        };

        tarefasAtualizadas = [...tarefas, novaTarefa];
      }

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tarefasAtualizadas));

      navigation.goBack();
    } catch (error) {
      console.log(error);

      Alert.alert("Erro", "Não foi possível salvar.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tarefa ? "Editar tarefa" : "Nova tarefa"}</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua tarefa..."
        placeholderTextColor="#94A3B8"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TouchableOpacity style={styles.button} onPress={salvarTarefa}>
        <Text style={styles.buttonText}>{tarefa ? "Salvar alterações" : "Salvar tarefa"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
    padding: 24,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 24,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 20,
    elevation: 2,
    color: "#0F172A",
  },

  button: {
    backgroundColor: "#0F172A",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
