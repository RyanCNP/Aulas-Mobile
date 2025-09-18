import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ConsultaScreen() {
  const [usuario, setUsuario] = useState(null);

  async function consultarDados() {
    try {
      const dados = await AsyncStorage.getItem("usuario");
      if (dados) {
        setUsuario(JSON.parse(dados));
      } else {
        setUsuario(null);
      }
    } catch (error) {
      console.log("Erro ao consultar", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Usuário</Text>

      <TouchableOpacity style={styles.button} onPress={consultarDados}>
        <Text style={styles.textButton}>Consultar</Text>
      </TouchableOpacity>

      {usuario ? (
        <View style={styles.resultado}>
          <Text style={styles.info}>Nome: {usuario.nome}</Text>
          <Text style={styles.info}>Email: {usuario.email}</Text>
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Nenhum usuário encontrado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f8ff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "#00CED1", padding: 15, borderRadius: 8, marginTop: 10, width: "60%", alignItems: "center" },
  textButton: { color: "#fff", fontWeight: "bold" },
  resultado: { marginTop: 30, padding: 15, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, backgroundColor: "#fff" },
  info: { fontSize: 16, marginVertical: 5 },
});