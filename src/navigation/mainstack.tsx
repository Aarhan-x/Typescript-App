import React,{FC,useEffect,useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
    getAuth,
    onAuthStateChanged,
  } from 'firebase/auth';
import AppStack from './appstack'
import AuthStack from './authstack'

const auth = getAuth();

const MainNav: FC = () => {
    const [user,setUser] = useState<any>(null);
    const bootstrap = () => {
        onAuthStateChanged(auth,_user => {
            if(_user){
                setUser(_user)
                console.log(_user)
            }else{
                setUser(null)
            }
        })
    }

    useEffect(()=>{
        bootstrap()
    })

    return(
        <NavigationContainer>
            {user != null ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default MainNav