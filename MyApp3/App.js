import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Pessoas from './src/Pessoas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [
        { id: '1', nome: 'Davy', idade: 20, email: 'davyzinho@gmail.com' },
        { id: '2', nome: 'Nery', idade: 20, email: 'neryzinho@gmail.com' },
        { id: '3', nome: 'Gueff', idade: 20, email: 'gueffzinho@gmail.com' },
        { id: '4', nome: 'Pedro', idade: 19, email: 'pedrinho@gmail.com' },
        { id: '5', nome: 'Ryan', idade: 20, email: 'ryanzinho@gmail.com' },
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.lista}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Pessoas data={item} />}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingVertical: 20,
  },
});

export default App;