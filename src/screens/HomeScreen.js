import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Text>Home</Text>
            
            <Button
                title='Sair'
                onPress={() => navigation.replace('Login')}
            />
        </View>
    );
};

export default HomeScreen;

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