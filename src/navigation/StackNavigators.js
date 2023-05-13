/*
**Native Stack Navigator fornece uma maneira de seu aplicativo fazer a transição entre telas 
**onde cada nova tela é colocada no topo de uma pilha.
*/
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";


const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
          
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>
    );
};