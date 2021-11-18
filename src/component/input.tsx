import React,{FC} from 'react'
import {View, TextInput, StyleSheet, Dimensions } from 'react-native'

const {height,width} = Dimensions.get('screen')

interface Props {
    placeholder:string;
    onChangeText: (text:string) => void;
    secureText?:boolean;
}

const Input : FC<Props> = (props) => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={props.placeholder} secureTextEntry={props.secureText} onChangeText={props.onChangeText} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width/ 1.1,
        alignSelf:'center',
        backgroundColor:'white',
    },
    input:{
        padding:15
    }
})

export default Input