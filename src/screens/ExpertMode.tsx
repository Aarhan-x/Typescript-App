import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '../component';
import {
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth';

const auth = getAuth()
export default function ExpertMode() {
  const [email,setemail] = useState<string | null>(null);
  const [password,setpassword] = useState<string | null>(null);
  
  const login = async () => {
    if(email && password){
      const {user} = await signInWithEmailAndPassword(auth,email, password);
    }else{
      alert("missing");
    }
  }
  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
            <Text>Navigation</Text>
        </View>
        <View style={styles.main}>
            <Text>Expert mode</Text>
            <Input placeholder="Useremail" onChangeText={(text)=> setemail(text)}/>
            <Input placeholder="password" secureText={true} onChangeText={(text)=> setpassword(text)}/>
            <Button title="Sign up" onPress={login}/>
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
      
  }
});
