import React from 'react';
import {
    Button,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        
            <TextInput style={styles.input}
                placeholder='Usuário'/>

            <TextInput style={styles.input}
                placeholder='Senha'
                secureTextEntry/>

            <Button style={styles.button}
                title='entrar'
                onPress={() => navigation.replace('Home')}/>
            
            <Pressable style={styles.text}
                onPress={() => navigation.replace('Register')}>
                <Text>Criar conta</Text>
            </Pressable>

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
   
    },
    text: {
        
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