import { View, Text, SafeAreaView, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import Styles from './Styles';

export default function LoginScreen({navigation}) {

  const [username, setUsername] = useState('');
  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.heading}> Hey please login</Text>
        <TextInput  
          sstyle={{flex: 0.75}}
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder="Add new note..."       
          />
        <Button style={Styles.buttonLogIn} 
          title="Submit" 
          onPress={() => navigation.navigate('Home')}
          color="#841584"
          />
      </View>
    </SafeAreaView>

  );
}

// jomåikumpi nappi, joko pressable tai button käyttöön