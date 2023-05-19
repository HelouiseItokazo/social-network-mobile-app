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

const RegisterScreen = ({ navigation }) => {
    const [registerInformation, setRegisterInformation] = useState({
        email: '',
        emailConfirmation: '',
        password: '',
        passwordConfirmation: ''
    });

    const validateRegistration = async () => {
        if (registerInformation.password !== registerInformation.passwordConfirmation) {
            Alert.alert('As senhas não conferem!')
            return;
        }
        createUserWithEmailAndPassword(
            auth,
            registerInformation.email,
            registerInformation.password
        )
            .then(() => {
                navigation.replace('Home')
                setRegisterInformation({
                    email: '',
                    emailConfirmation: '',
                    password: '',
                    passwordConfirmation: ''
                })
            })
            .catch((error) => Alert.alert(error.message));
    };



    return (
        <>
            <View style={style.container}>
                <Text>Cadastro</Text>
                <TextInput
                    onChangeText={(value) => setRegisterInformation({
                        ...registerInformation,
                        email: value
                    })}
                    placeholder='Informe seu e-mail'
                    value={registerInformation.email} />
                <TextInput
                    onChangeText={(value) => setRegisterInformation({
                        ...registerInformation,
                        emailConfirmation: value
                    })}
                    placeholder='Confirme seu e-mail'
                    value={registerInformation.emailConfirmation} />
                <TextInput
                    onChangeText={(value) => setRegisterInformation({
                        ...registerInformation,
                        password: value
                    })}
                    placeholder='Informe sua senha'
                    secureTextEntry
                    value={registerInformation.password} />
                <TextInput
                    onChangeText={(value) => setRegisterInformation({
                        ...registerInformation,
                        passwordConfirmation: value
                    })}
                    placeholder='Confirme sua senha'
                    secureTextEntry
                    value={registerInformation.passwordConfirmation} />
                <Button
                    onPress={() => validateRegistration}
                    title='Cadastrar' />
            </View>
        </>
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