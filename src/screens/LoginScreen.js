import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        
            <TextInput style={styles.input}
                placeholder='Usuário'
            />
            <TextInput style={styles.input}
                placeholder='Senha'
            />
            <Button style={styles.button}
                title='entrar'
                onPress={() => navigation.replace('Home')}
            />
            <Text style={styles.text}>Criar conta</Text>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 555555,
        margin: 10,
        padding: 10,
        width: '80%'
    },
    button: {
        backgroundColor: 555555,
        margin: 10,
        padding: 10,
        width: '80%'
    },
    text: {
        textAlign: 'left',
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