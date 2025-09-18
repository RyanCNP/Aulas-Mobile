import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Pessoas extends Component {
    render() {
        const { nome, idade, email } = this.props.data;

        return (
            <View style={styles.areaPessoa}>
                <Text style={styles.textoPessoa}>Nome: {nome}</Text>
                <Text style={styles.textoPessoa}>Idade: {idade}</Text>
                <Text style={styles.textoPessoa}>Email: {email}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaPessoa: {
        backgroundColor: '#222',
        height: 150,
        marginBottom: 25,
        padding: 15,
        borderRadius: 10
    },
    textoPessoa: {
        color: '#FFF',
        fontSize: 16,
        marginBottom: 5
    }
});

export default Pessoas;