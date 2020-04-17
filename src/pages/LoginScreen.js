import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    ActivityIndicator, 
} from 'react-native';

import { useDispatch } from 'react-redux';
import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';

import BntConfirm from '../components/BntConfirm.js'
import FormRow from '../components/FormRow.js'
import { tryLogin } from '../actions';

const LoginPage = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        var firebaseConfig = {
            apiKey: "AIzaSyDhw_764fOM4ixs61nMbN-NzIgDV6jcNYY",
            authDomain: "series-6ce2c.firebaseapp.com",
            databaseURL: "https://series-6ce2c.firebaseio.com",
            projectId: "series-6ce2c",
            storageBucket: "series-6ce2c.appspot.com",
            messagingSenderId: "961252031802",
            appId: "1:961252031802:web:100bc2e5a8a39bccfde403",
            measurementId: "G-4F3N0T1YKG"
          };
          // Initialize Firebase
          if(firebase.apps.length === 0){
            firebase.initializeApp(firebaseConfig);
          }
          
    }, [])

    const login = () => {
        setIsLoading(true)

        dispatch(tryLogin({email, pass}))
            .then(user => {
                if(user) 
                   return navigation.replace('UserHome')
                setIsLoading(false)
                setMessage('')
            })
            .catch(error => {
                setIsLoading(false),
                getMessageByErrorCode(error.code)
            })
    }
    

    const getMessageByErrorCode = errorCode => {
        switch(errorCode){
            case 'auth/wrong-password':
                setMessage('Senha incorreta!')
                break;
            case 'auth/user-not-found':
                setMessage('Usuário não encontrado')
                break;
            case 'auth/invalid-email':
                setMessage('Email inválido')
                break;
        }
    }

    const renderMessage = () => {
        if(!message) return null;

        return(
            <View style={{paddingBottom: 10, paddingLeft: 20}}>
                <Text style={{color: 'red'}} >{message}</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <FormRow first={true}>
                    <TextInput 
                    style={styles.input}
                    placeholder="email@example.com"
                    onChangeText={text => setEmail(text)}
                    value={email}  
                    keyboardType="email-address"
                    autoCapitalize="none" 
                    />
                </FormRow>
                <FormRow last={true}>
                    <TextInput 
                    style={styles.input} 
                    placeholder="*******" 
                    secureTextEntry
                    onChangeText={text => setPass(text)}
                    value={pass}
                    />
                </FormRow>
                {renderMessage()}
                {isLoading === true
                    ?   <ActivityIndicator />
                    :   <BntConfirm  
                            titulo={"Entrar"} 
                            prop={login}
                        />
                }
                    

                <TouchableOpacity style={{paddingTop: 10, alignItems: 'center'}} 
                    onPress={() => navigation.navigate('NewUser')}>
                    <Text>Criar uma conta</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botRadious}>
                
                <Text style={styles.botText}>
                    Bem vindo!
                </Text>
                <Ionicons name="md-checkmark-circle" size={32} color="white" />
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    }, 

    form: {
        flex: 3,
        justifyContent: 'center',
        borderBottomEndRadius: 128,
        paddingTop: 100
    },

    input: {
        backgroundColor: 'white',
        paddingLeft: 20,
        borderRadius: 15,
        height: 50,
        fontSize: 20,
    },

    botRadious: {
        flex:1, 
        backgroundColor: '#bce0ee',
        borderTopLeftRadius: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 30,
        elevation: 20
    },

    botText: {
        color: 'white', 
        fontSize: 30,
        paddingRight: 10
    }

})

export default LoginPage;