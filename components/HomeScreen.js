
import { View, Text, SafeAreaView, Button, ScrollView } from 'react-native'
import { useEffect, useState, useLayoutEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import React from 'react'
import Styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_KEY = '@notes_Key'

export default function HomeScreen({route, navigation }) {

    const [notes, setNotes] = useState([]);

/*     useLayoutEffect( () => {
    navigation.setOptions({
        headerStyle: {
            backroundColor: '#f0f0f0'
        },
        headerRight: () => (
            <Feather
                style={Styles.navButton}
                name="plus"
                size={24}
                color="black"
                onPress={ () => navigation.navigate('Edit')}
            />  
        ),  
    }) 
}, [])  */
const storeData = async (value) => {
  try{
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@notes_Key', jsonValue);
  } catch (e) {
    //  console.log(e);
  }
}

const getData = async() => {
  try{
      return AsyncStorage.getItem('@notes_Key')
      .then (req => JSON.parse(req))
      .then (json => {
          if (json === null) {
              json = []
          }
          setNotes(json);
      })
      .catch (error => console.log(error));
  } catch (e) {
  //   console.log(e);
  } 
}

useEffect(() => {
  if(route.params?.note) {
      const newKey = notes.lenght + 1;
      const newNote = {key: newKey.toString(), note: route.params.note};
      const newNotes = [...notes, newNote];
      storeData(newNotes);
  }
  getData();
},[route.params?.note])

 //   console.log(notes.length)
  //  console.log(notes)
    
  return (
   
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.heading}> HomeScreen</Text>
          <ScrollView>
            {
              notes.map((note) => (
                <View tyle={Styles.rowContainer} key={note.key}>
                  <Text style={Styles.rowText}>{note.note}</Text>
                </View>
              ))
            }
            </ScrollView>
        <Button style={Styles.buttonLogIn} 
            title="Edit" 
            onPress={() => navigation.navigate('Edit')}
            />
        <Button style={Styles.buttonLogIn} 
            title="LogOut" 
            onPress={() => navigation.navigate('Login')}
            />
        <Button style={Styles.buttonLogIn} 
            title="ClearAll" 
            onPress={() => AsyncStorage.clear()}   
            />
      </View>
    </SafeAreaView>

  );
}