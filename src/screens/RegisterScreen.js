import React, { useState } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../configs/firebase';

const RegisterScreen = () => {
    const [registerInformation, setRegisterInformation] = useState({
        email: '',
        emailConfirmation: '',
        password: '',
        passwordConfirmation: ''
    });

    return (
        <View style={style.container}>
            <Text>Cadastro</Text>
            <TextInput
                placeholder='Informe seu e-mail' />
            <TextInput
                placeholder='Confirme seu e-mail' />
            <TextInput
                onChangeText={(value) => setRegisterInformation({
                    ...registerInformation,
                    email: value
                })}
                placeholder='Informe sua senha'
                secureTextEntry 
                value={registerInformation.email}/>
            <TextInput
                onChangeText={(value) => setRegisterInformation({
                    ...registerInformation,
                    emailConfirmation: value
                })}
                placeholder='Confirme sua senha'
                secureTextEntry
                value={registerInformation.emailConfirmation}/>
            <Button
                onPress={()=>{
                    if(registerInformation.password !== registerInformation.passwordConfirmation){
                        Alert.alert("Senhas não conferem!");
                        return;
                    }
                }}
                title='Cadastrar' />
        </View>
    );
};

export default RegisterScreen;

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
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