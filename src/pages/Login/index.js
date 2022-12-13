import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';

const logo = require('../../docs/imgs/logo.png');

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const Logar = async () => {
        let credenciais = {
            "email": email,
            "senha": senha,
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        options.body = JSON.stringify(credenciais);
        fetch("http://localhost:3000/usuarios/read", options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 200) {
                    navigation.navigate("Home")
                }
                else {
                    navigation.navigate("Home")
                }
            })
            .catch((error) => {
                console.log('error', error);
              });
    };

    const MsgAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    return (
        <ScrollView>
            <View style={style.container}>
                <Image style={style.imgLogin} source={{ uri: logo }} />

                <TextInput style={style.input} placeholder='Email' placeholderTextColor={"#004c82"} onChangeText={(value) => { setEmail(value) }} />
                <TextInput style={style.input} placeholder='Senha' placeholderTextColor={"#004c82"} secureTextEntry={true} onChangeText={(value) => { setSenha(value) }} />

                <TouchableOpacity style={style.btLogin} onPress={() => { Logar() }}>
                    <Text style={style.text}>Login</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={style.btCadastro} onPress={() => { Logar() }}>
                    <Text style={style.text}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    imgLogin: {
        height: '400px',
        width: '400px',
        borderRadius: '50px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    input: {
        marginTop: '5%',
        height: '50px',
        width: '75%',
        backgroundColor: '#EFEFEF',
        borderRadius: '10px',
        padding: '20px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    btLogin: {
        marginTop: '10%',
        height: '50px',
        width: '50%',
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    text: {
        fontSize: "20px",
        color: 'white'
    }
});