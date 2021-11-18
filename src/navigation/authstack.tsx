import React,{FC} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExpertMode, LandingScreen, LazyMode } from '../screens';


const {Navigator, Screen} = createNativeStackNavigator();

const AuthStack : FC  = () => {
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="landingscreen" component={LandingScreen}/>
            <Screen name="expertmode" component={ExpertMode} />
            <Screen name="lazymode" component={LazyMode} />
        </Navigator>
    )
}

export default AuthStack