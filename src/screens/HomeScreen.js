import React from "react";
import {
    Button,
    Text,
    View
} from 'react-native';
import { auth } from '../configs/firebase';

const HomeScreen = ({ navigation }) => {
    return(
        <View>
            <Text>Home</Text>
            <Button
                title="Sair"
                onPress={()=> navigation.replace('Login')}/>
        </View>
    );
};

export default HomeScreen;