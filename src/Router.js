import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';

import { Ionicons } from '@expo/vector-icons';

import LoginPage from './pages/LoginScreen.js';
import NewUser from './pages/NewUser.js'
import UserHome from './pages/UserHome.js';
import SerieDetail from './pages/SerieDetailPage';

const Stack = createStackNavigator();

export default function AppContainer() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserHome"
                headerMode="screen"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#bce0ee',
                    },
                    headerTintColor: 'white',
                    headerTitleAlign: 'center'
                    
                }}
            >
                <Stack.Screen 
                    name="Login" 
                    component={LoginPage} 
                    options={{
                        headerTitle: () => <Ionicons name="md-fitness" size={32} color="white" />
                    }}/>
                <Stack.Screen 
                    name="NewUser" 
                    component={NewUser} 
                    options={{
                        title: "Novo Usuário",
                    }}
                    />
                <Stack.Screen 
                    name="UserHome" 
                    component={UserHome} 
                    options={{
                        title: "SerieFlix"
                    }}/>
                <Stack.Screen 
                    name="SerieDetail" 
                    component={SerieDetail} 
                    options={({route}) => {
                        const { title } = route.params.serie
                        return(
                            {title: title,
                            
                            }
                        )
                    }}
                />
                    
            </Stack.Navigator>
        </NavigationContainer>
    );
}