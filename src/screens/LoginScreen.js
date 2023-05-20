import React, { useState } from 'react';
import {
    Alert,
    Button,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../configs/firebase';

const LoginScreen = ({ navigation }) => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const login = () => {
        signInWithEmailAndPassword(auth, inputEmail, inputPassword)
        .then(() => {
            navigation.replace('Home')
        })
        .catch((error) => Alert.alert(error.message)
        )
    };


    return (
        <View style={styles.container}>
        
            <TextInput style={styles.input}
                onChangeText={(value) => setInputEmail(value)}
                placeholder='E-mail'
                value={inputEmail}/>

            <TextInput style={styles.input}
                onChangeText={(value) => setInputPassword(value)}
                placeholder='Senha'
                secureTextEntry
                value={inputPassword}/>

            <Button style={styles.button}
                title='entrar'
                onPress={() => login()}/>
            
            <Pressable style={styles.text}
                onPress={() => navigation.replace('Register')}>
                <Text>Criar conta +</Text>
            </Pressable>

        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {      
        backgroundColor: '#aaa69d',
        flex: 1,
        padding: 20,
    },
    input: {
        backgroundColor: '#f7f1e3',
        margin: 10,
        padding: 10,
        width: '80%'
    },
    button: {
        borderRadius: 8,
    },
    text: {
        padding: 10,
        margin: 10
    }
});

/*
FLEX 1, significa:
flex-grow : 1;    ➜ O div crescerá na mesma proporção que o tamanho da janela       
flex-shrink : 1;  ➜ O div diminuirá na mesma proporção que o tamanho da janela 
flex-basis : 0;   ➜ O div não tem um valor inicial como tal e será
                     ocupe a tela de acordo com o tamanho da tela disponível para
                     por exemplo: - se 3 divs estiverem no wrapper, cada div levará 33%.

*/