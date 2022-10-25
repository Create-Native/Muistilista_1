
import React, { useState, useLayoutEffect } from "react";
import { Feather } from '@expo/vector-icons';
import { Button, TextInput, SafeAreaView, View } from "react-native";
import Styles from "./Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditScreen({navigation}) {

    const [note, setNote] = useState('');

/*     useLayoutEffect(() => {
      navigation.setOptions({
        headerStyle: {
            backgroundColor: '#f0f0f0'
        },
        headerRight: () => (
            <Feather
                style={Styles.navButton}
                name="save"
                size={24}
                color="black"
                onPress={() => navigation.navigate('Home', {note: note})}
                />
            ),
      })
      }), [note]; */

    const clearAll = () => {
        AsyncStorage.clear()
        navigation.navigate('Login')
    }
 
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.input}>
                <TextInput  
                    sstyle={{flex: 0.75}}
                    onChangeText={text => setNote(text)}
                    value={note}
                    placeholder="Add new note..."       
                    />
            </View>
            <View style={{paddingTop: 50}}>
                <Button style={Styles.buttonSave} 
                    title="Save" 
                    onPress={() => navigation.navigate('Home', {note: note})}
                    color="#841584"
                    />
                <Button style={Styles.buttonLogIn} 
                    title="ClearAll" 
                    onPress={() => clearAll()} 
                    color="#841584"
                    />
                <Button style={Styles.buttonLogIn} 
                    title="Back" 
                    onPress={() => navigation.navigate('Home')}
                    color="#841584"
                />          
            </View>
        </SafeAreaView>
    )
}
