import { View, Text, SafeAreaView, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import Styles from './Styles';

export default function LoginScreen({navigation, setLogin}) {

  const [username, setUserName] = useState(''); // anna joku nimi

  const login = () => {
    if (username === '') {
      alert('no user!!')
      console.log('no user!!')
    }
    else{  
      navigation.navigate('Home', {testKey: username})
      setUserName('')
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.heading}> Hey please login</Text>
        <View style={Styles.input}>
          <TextInput  
            sstyle={{flex: 0.75}}
            onChangeText={(username) => setUserName(username)}
            value={username}
            placeholder="Give your name to login..."       
            />
          </View>
        <View>
          <Button style={Styles.buttonLogIn} 
            title="Submit" r
            onPress={login}
            color="#841584"
            />
        </View>
    </SafeAreaView>

  );
}

// jomåikumpi nappi, joko pressable tai button käyttöön