import React, {useState,useEffect} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';



export default function LandingScreen(props) {
  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
            <Text>Navigation</Text>
        </View>
        <View style={styles.main}>
            <Text style={styles.text}>Periculum</Text>
            <Text style={styles.text}>About</Text>
            <Pressable onPress={()=> props.navigation.navigate('expertmode',{transition:'vertical'})}><Text  style={styles.text}>Expert Mode</Text></Pressable>
            <Pressable onPress={()=> props.navigation.navigate('lazymode')}><Text  style={styles.text}>Too Lazy For Expert Mode</Text></Pressable>
        </View>
        <View style={styles.footer}>
            <Text>footer</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  navbar:{
      flex:1,
      
  },
  main:{
      flex:9,
    
  },
  footer:{
      flex:1,
    
  },
  text:{
    color:'white'
  }
});
