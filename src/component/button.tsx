import React,{FC} from 'react'
import {View, TextInput,Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const {height,width} = Dimensions.get('screen')

interface Props {
    title:string;
    onPress: () => void;
}

const Button : FC <Props> = (props) => {
    return(
        <TouchableOpacity style={styles.conatainer} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    conatainer:  {
        backgroundColor:'#0000',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        padding:10,
    },
    text:{
        color:'white'
    }
})

export default Button