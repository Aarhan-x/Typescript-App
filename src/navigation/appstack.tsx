import React,{FC} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';


const {Navigator, Screen} = createNativeStackNavigator();

const AppStack : FC  = () => {
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="homescreen" component={HomeScreen}/>
        </Navigator>
    )
}

export default AppStack