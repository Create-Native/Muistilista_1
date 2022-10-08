
import { View, Text, SafeAreaView, Button, Pressable } from 'react-native'
import React from 'react'
import Styles from './Styles';

export default function HomeScreen({navigation}) {
  return (
   
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.heading}> HomeScreen</Text>
        <Button style={Styles.buttonLogIn} 
            title="LogOut" 
            onPress={() => navigation.navigate('Login')}
            />
      </View>
    </SafeAreaView>

  );
}