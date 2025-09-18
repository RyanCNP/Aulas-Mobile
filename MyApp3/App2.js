import React, { Component } from "react";
import { Text, View, StyleSheet} from 'react-native';
import { Picker } from "react-native-web";

class App extends Component{
    constructor(props){
        super(props);
        pizza = 0;
        pizzas = [
            {key: 1, nome: 'Strogonoff', valor: 35.90},
            {key: 2, nome: 'Calabresa', valor: 59},
            {key: 3, nome: 'Quatro Queijos', valor: 37},
            {key: 4, nome: 'Brigadeiro', valor: 27.70},
            {key: 5, nome: 'Portuguesa', valor: 70}
        ]
    }
    render(){
        let pizzasItem = this.state.pizzas.map((v, k) => {
            return <Picker.Item key = {k} value = {v} label = {v.nome} />
        })

        return(
            <View style = {styles.conteiner}>
                <Text style = {styles.logo}>Menu Pizza</Text>

                <Picker
                    selectedValue = {this.state.pizza}
                    onValueChange = {(itemValue, itemIndex) => this.setState({pizza: itemValue})}>
                    {pizzasItem}
                </Picker>

                <Text style = {styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
                <Text style = {styles.pizzas}>Valor: R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    pizzas: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default App;