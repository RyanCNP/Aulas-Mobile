import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      input: ''
    }
    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    if(this.state.input === ''){
      alert('Digite seu nome!');
      return;
    }
    this.setState({ name: 'Bem-vindo ' + this.state.input });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TextInput 
            style={styles.input}
            placeholder='Digite seu nome'
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({input: texto})}
          />

          <Button title="Entrar" onPress={this.entrar} />

          <Text style={styles.texto}>{this.state.name}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    marginTop: 50
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20
  }
});

export default App;