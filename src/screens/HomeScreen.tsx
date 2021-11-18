import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  getAuth,
  signOut
} from 'firebase/auth';

const auth = getAuth();

export default function HomeScreen() {
  const logOut = () => {
    
    signOut(auth);
  
  }
  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
            <Text>Navigation</Text>
        </View>
        <View style={styles.main}>
            <Pressable onPress={logOut}><Text>Logout</Text></Pressable>
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
    backgroundColor: '#fff'
  },
  navbar:{
      flex:2,
      backgroundColor:'red'
  },
  main:{
      flex:9,
      backgroundColor:'yellow'
  },
  footer:{
      flex:1,
      backgroundColor:'blue'
  }
});
