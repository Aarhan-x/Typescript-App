import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '../component';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInAnonymously
} from 'firebase/auth';

const auth = getAuth()
export default function LazyMode() {
  
  const signin = () => {
    signInAnonymously(auth);
  }
  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
        </View>
        <View style={styles.main}>
            <Button title="Sign in Anonymously" onPress={signin}/>
        </View>
        <View style={styles.footer}>
           
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
      
  }
});
