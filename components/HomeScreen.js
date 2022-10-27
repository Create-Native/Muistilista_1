
import { View, Text, SafeAreaView, Button, ScrollView, Pressable } from 'react-native'
import { useEffect, useState, useLayoutEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import React from 'react'
import Styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Radiobutton from './Radiobutton';
import LoginScreen from './LoginScreen';


const STORAGE_NOTES = '@notes_Notes'
const STORAGE_NOTES_KEY = '@notes_Notes_Key'

export default function HomeScreen({route, navigation }) {

    const [notes, setNotes] = useState([]);
    const [notesKey, setNotesKey] = useState([]);
    const [cleared, setCleared] = useState(0);

    useLayoutEffect( () => {
    navigation.setOptions({
        headerRight: () => (
            <Feather
                style={Styles.navButton}
                name="edit"
                size={24}
                color="black"
                onPress={ () => navigation.navigate('Edit')}
            />  
        ),  
    }) 
}, [])  

useEffect(() => {
  if(route.params?.note) {
      const newKey = notesKey + 1;
      const newNote = {key: newKey.toString(), note: route.params.note};
      const newNotes = [...notes, newNote];
      storeData(newNotes);
      storeDataKey(newKey);
  }
  getData();
  getDataKey();
},[route.params?.note])

const getData = async() => {
  try{
      return AsyncStorage.getItem('@notes_Notes')
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

const getDataKey = async() => {
  try{
      return AsyncStorage.getItem('@notes_Notes_Key')
      .then (req => JSON.parse(req))
      .then (json => {
          if (json === null) {
              json = []
          }
          setNotesKey(json);
      })
      .catch (error => console.log(error));
  } catch (e) {
  //   console.log(e);
  } 
}

const storeData = async (value) => {
  try{
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@notes_Notes', jsonValue); 
  } catch (e) {
    //  console.log(e);
  }
}

const storeDataKey = async (value) => {
  try{
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@notes_Notes_Key', jsonValue); 
  } catch (e) {
    //  console.log(e);
  }
}

const handleDeletePress = (key) => {
  const filteredList = notes.filter((note) => {
    return note.key !==key;
  })
  storeData(filteredList)
  getData()
};

  return (
    
    <SafeAreaView style={Styles.container}>
      <View>
        
        <Text style={Styles.heading}> Welcome {route.params.testKey}</Text>
          <View style={{height: 400}}>
            <ScrollView>
              {
                notes.map((note) => (
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', marginEnd: 10}}>
                    <View style={Styles.message} key={notes.key}>
                      <Radiobutton                   
                        cleared={cleared}
                        />
                      <Text >{note.note} </Text>
                    </View>
                    <View>
                      <Button
                      style={Styles.delButton}
                      title='Delete'
                      onPress={() =>  handleDeletePress(note.key)}
                      color="#841584"
                      />
                    </View>
                  </View>
                  ))
              }
              </ScrollView>
          </View>

{/*         <Button style={Styles.buttonLogIn} 
            title="clear" 
            onPress={() => setCleared(2 + 1)}
            /> */}
          

        <Button style={Styles.buttonSave} 
            title="Add" 
            onPress={() => navigation.navigate('Edit')}
            color="#841584"
            />
        <Button style={Styles.buttonLogIn} 
            title="LogOut" 
            onPress={() => navigation.navigate('Login')}
            color="#841584"
            />
          </View>

    </SafeAreaView>

  )
}