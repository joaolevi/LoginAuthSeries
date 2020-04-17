import firebase from 'firebase';

import { Alert } from 'react-native';

export const USER_LOGIN_SUCCESS = "USER_LOGIN";
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
});

export const tryLogin = ({ email, pass }) => dispatch => {
    return firebase
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .then(user => {
                dispatch(userLoginSuccess(user))
                return user;
            })
            .catch(error =>  {
                if(error.code === 'auth/user-not-found'){
                    return new Promise((resolve, reject) =>{
                        Alert.alert(
                            'Usuário não encontrado',
                            'Deseja criar uma conta?',
                            [{
                                text: 'Sim', 
                                onPress: () => {
                                    firebase
                                        .auth()
                                        .createUserWithEmailAndPassword(email, pass)
                                        .then(resolve)
                                        .catch(reject)
                                }
                            },
                            {
                            text: 'Não',
                            onPress: () => resolve(),
                        }])
                        
                    })
                }
                return Promise.reject(error)
            })
}