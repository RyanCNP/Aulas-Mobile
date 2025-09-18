import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App!</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#6A0DAD" }]}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.textButton}>Ir para Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#00CED1" }]}
        onPress={() => navigation.navigate("Consulta")}
      >
        <Text style={styles.textButton}>Ir para Consulta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#f8f8f8" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 30 },
  button: { padding: 15, marginVertical: 10, borderRadius: 10, width: "70%", alignItems: "center", shadowColor: "#000", shadowOpacity: 0.2, shadowOffset: { width: 0, height: 2 }, shadowRadius: 3, elevation: 3 },
  textButton: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});