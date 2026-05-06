import React from "react";
import { Text, View, FlatList } from "react-native";

//dados da lista
const tarefas = [
  { id: 1, titulo: "Estudar React Native" },
  { id: 2, titulo: "Criar primeira tela" },
  { id: 3, titulo: "Montar lista de tarefas" },
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
      <Text>{item.titulo}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "green" }}>HELLO WORLD!</Text>
      <Text>Meu primeiro app mobile</Text>

      <FlatList data={tarefas} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}
