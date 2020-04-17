import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Alert, 
    ActivityIndicator, } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase';

import BntConfirm from '../components/BntConfirm.js'
import FormRow from '../components/FormRow.js'
import { Header } from 'react-native/Libraries/NewAppScreen';

const NewUser = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [loading, setLoading] = useState(false);

    const tryCreateLogin = () => {
        setLoading(true);
        console.log((pass == passConfirm))
        console.log(email, pass)
        if((pass == passConfirm) === true){
            firebase.auth().createUserWithEmailAndPassword(email, pass)
                        .then(() => 
                        {setLoading(false),
                        Alert.alert(
                        'Conta criada com sucesso'
                        ,'Volte a tela inicial e faça seu login',
                        [{
                            title:'ok', onPress: () => navigation.goBack()
                        }])})
                        .catch(error => {
                            setLoading(false)
                            console.log(error.code)
                            getMessageByErrorCode(error.code)
                        })
        }else{
            setLoading(false);
            return Alert.alert('Senhas não conferem', 'Verifique a senha e tente novamente')
        }         
    }
        

    const getMessageByErrorCode = errorCode => {
        switch(errorCode){
            case 'auth/email-already-in-use':
                Alert.alert('Email inválido','Este email já possui conta associada')
                break;
            case 'auth/invalid-email':
                Alert.alert('Email inválido','Por favor, digite um email válido')
                break;
            case 'auth/operation-not-allowed':
                Alert.alert('Operação não permitida', 'Tente novamente mais tarde')
                break;
            case 'auth/weak-password':
                Alert.alert('Senha fraca','Utilize caracteres, letras maiúsculas e minúsculas')
                break;
        }
    }
    
    return(
        <View style={styles.container}>
                <FormRow first={true}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput 
                    style={styles.txtInp} 
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="example@email.com"
                    />
                </FormRow>
                
                <FormRow last={true}>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput 
                    style={styles.txtInp}
                    onChangeText={text => setPass(text)}
                    value={pass}
                    placeholder="*******"
                    secureTextEntry
                    />
                </FormRow>
                
                <FormRow>
                    <Text style={styles.label}>Confirme a senha:</Text>
                    <TextInput
                    style={styles.txtInp}
                    onChangeText={text => setPassConfirm(text)}
                    value={passConfirm}
                    secureTextEntry
                    placeholder="*******"
                    />
                </FormRow>
                {loading === true
                ?   <ActivityIndicator />
                :   <BntConfirm  titulo={"Confirmar"} 
                    prop={tryCreateLogin}
                    />
                }
            
        </View>
    )
}

const styles = StyleSheet.create({
    txtInp: {
        backgroundColor: 'white',
        paddingLeft: 20,
        borderRadius: 15,
        height: 50,
        fontSize: 20
    },
    container: {
        backgroundColor: 'transparent',
    },

    label: {
        paddingBottom: 3,
        paddingLeft: 4,
        fontSize: 15,
    }
})

export default NewUser;