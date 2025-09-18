import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./assets/Biscoito.png')
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defina o próprio limite.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'Faça o possível para dar o seu melhor.',
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./assets/Biscoito-Quebrado.png')
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={this.state.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 200,
    height: 50,
    backgroundColor: '#dd7b22',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnArea: {
    flexDirection: 'row',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;