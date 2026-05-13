import React, { useState, useCallback } from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import TaskItem from "../components/TaskItem";

const STORAGE_KEY = "@taskapp:tarefas";

export type Tarefa = {
  id: string;
  titulo: string;
  concluida: boolean;
};

export default function HomeScreen({ navigation }: any) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const carregarTarefas = async () => {
    try {
      const dadosSalvos = await AsyncStorage.getItem(STORAGE_KEY);

      if (dadosSalvos) {
        setTarefas(JSON.parse(dadosSalvos));
      } else {
        const listaInicial: Tarefa[] = [
          { id: "1", titulo: "Estudar React Native", concluida: false },
          { id: "2", titulo: "Criar primeira tela", concluida: false },
          { id: "3", titulo: "Montar lista de tarefas", concluida: false },
        ];

        setTarefas(listaInicial);

        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(listaInicial));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const salvarTarefas = async (novaLista: Tarefa[]) => {
    setTarefas(novaLista);

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista));
  };

  const concluirTarefa = async (id: string) => {
    const novaLista = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
    );

    await salvarTarefas(novaLista);
  };

  const excluirTarefa = async (id: string) => {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);

    await salvarTarefas(novaLista);
  };

  const editarTarefa = (tarefa: Tarefa) => {
    navigation.navigate("NewTask", { tarefa });
  };

  useFocusEffect(
    useCallback(() => {
      carregarTarefas();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minhas tarefas</Text>

      <Text style={styles.subtitle}>Organize seu dia de forma simples</Text>

      <FlatList
        data={tarefas}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TaskItem
            titulo={item.titulo}
            concluida={item.concluida}
            onConcluir={() => concluirTarefa(item.id)}
            onExcluir={() => excluirTarefa(item.id)}
            onEditar={() => editarTarefa(item)}
          />
        )}
      />

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate("NewTask")}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1E293B",
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 6,
    marginBottom: 24,
  },

  list: {
    paddingBottom: 120,
  },

  fab: {
    position: "absolute",
    right: 24,
    bottom: 30,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#0F172A",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    elevation: 8,
  },

  fabText: {
    color: "#FFF",
    fontSize: 34,
    marginTop: -2,
  },
});
