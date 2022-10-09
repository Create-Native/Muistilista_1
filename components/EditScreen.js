
import React, { useState, useLayoutEffect } from "react";
import { Feather } from '@expo/vector-icons';
import { Button, TextInput, View } from "react-native";
import Styles from "./Styles";

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
 
    return (
        <View>
            <TextInput 
                style={Styles.newTask} onChangeText={text => setNote(text)}
                value={note}
                placeholder="Add new note"
                />
            <Button style={Styles.buttonSave} 
                title="Save" 
                onPress={() => navigation.navigate('Home', {note: note})}
                />
        </View>
    )
}
