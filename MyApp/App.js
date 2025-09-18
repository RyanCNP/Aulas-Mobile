import React, { Component } from 'react';
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native';
import image1 from './assets/ElonMusk.png';
import image2 from './assets/SteveJobs.png';

class App extends Component {
  render() {
    let name1 = 'Steve Jobs';
    let name2 = 'Elon Musk';

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text style={styles.primaryText}>Hello World</Text>
          <Text style={styles.secondaryText}>My first App</Text>
          <Text style={styles.nameText}>{name1}</Text>
          <Image source={image2} style={styles.images} />
          <Text style={styles.nameText}>{name2}</Text>
          <Image source={image1} style={styles.images} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  primaryText: {
    fontSize: 25,
    color: 'blue',
  },
  secondaryText: {
    fontSize: 20,
    color: 'yellow',
  },
  nameText: {
    fontSize: 15,
    color: 'green',
  },
  images: {
    width: 250,
    height: 200,
  },
});

export default App;