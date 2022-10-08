import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import Styles from './Styles';

export default function LoginScreen({navigation}) {
  return (
   
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.heading}> LoginScreen1</Text>
        <Button style={Styles.buttonLogIn} 
          title="Submit" 
          onPress={() => navigation.navigate('Home')}
          />
      </View>
    </SafeAreaView>

  );
}

// jomåikumpi nappi, joko pressable tai button käyttöön