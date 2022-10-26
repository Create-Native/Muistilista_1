
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import EditScreen from './components/EditScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{title: 'Welcome'}}
          />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{title: 'Your notes'}} 
          />
        <Stack.Screen 
          name="Edit" 
          component={EditScreen}
          options={{title: 'Edit'}} 
          />
      </Stack.Navigator>
    </NavigationContainer>
 
   
  );
}