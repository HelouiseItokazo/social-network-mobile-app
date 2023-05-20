import React from "react";
import {
    Button,
    Text,
    View
} from 'react-native';
import { auth } from "../configs/firebase";
import { signOut } from "firebase/auth";

const HomeScreen = ({ navigation }) => {

    return(
        <View>
            <Text>Home</Text>
            <Button
                title="Sair"
                onPress={()=> {
                    signOut(auth)
                    .then(() => {navigation.replace('Login')})
                    .catch((error) => console.log(error.message))
                }}/>
        </View>
    );
};

export default HomeScreen;

