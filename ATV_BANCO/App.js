import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  Alert, 
  Switch, 
  StyleSheet 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sexo: 'Masculino',
      limite: 0,
      casado: false
    };
  }

  criarConta = () => {
    const { nome, sexo, limite, casado } = this.state;
    Alert.alert(
      "Conta Criada com Sucesso",
      `Nome: ${nome}\nValor Limite: ${limite.toFixed(2)}\nSexo: ${sexo}\nEstado Civil: ${casado ? 'Casado' : 'Solteiro'}`
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={this.state.nome}
          onChangeText={(texto) => this.setState({ nome: texto })}
        />

        <Text style={styles.label}>Informe seu Sexo:</Text>
        <Picker
          selectedValue={this.state.sexo}
          onValueChange={(itemValue) => this.setState({ sexo: itemValue })}
          style={styles.picker}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>

        <Text style={styles.label}>Escolha seu Limite:</Text>
        <Slider
          minimumValue={0}
          maximumValue={1000}
          value={this.state.limite}
          onValueChange={(valor) => this.setState({ limite: valor })}
          step={1}
          minimumTrackTintColor="green"
          thumbTintColor="blue"
        />
        <Text style={styles.limite}>{this.state.limite.toFixed(2)} R$</Text>

        <View style={styles.switchContainer}>
          <Switch
            value={this.state.casado}
            onValueChange={(valor) => this.setState({ casado: valor })}
            thumbColor={this.state.casado ? "green" : "red"}
          />
          <Text style={styles.estadoCivil}>
            {this.state.casado ? "Casado" : "Solteiro"}
          </Text>
        </View>

        <Button title="CRIAR CONTA" onPress={this.criarConta} color="#1E90FF"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5
  },
  label: {
    fontSize: 16,
    marginVertical: 10
  },
  picker: {
    marginBottom: 20
  },
  limite: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
  estadoCivil: {
    marginLeft: 10,
    fontSize: 16
  }
});

export default App;
