
import { View, Text, SafeAreaView, Button, ScrollView, Pressable } from 'react-native'
import { useEffect, useState, useLayoutEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import React from 'react'
import Styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_NOTES = '@notes_Notes'
const STORAGE_NOTES_KEY = '@notes_Notes_Key'

export default function HomeScreen({route, navigation }) {

    const [notes, setNotes] = useState([]);
    const [notesKey, setNotesKey] = useState([]);

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
  console.log(notesKey, "notesKey")
  return (
   
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.heading}> HomeScreen</Text>
          <View style={{height: 400}}>
            <ScrollView>
              {
                notes.map((note) => (
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', marginEnd: 10}}>
                    <View style={Styles.message} key={notes.key}>
                      <Text >{note.key}: {note.note} </Text>
                    </View>
                    <View>
                      <Button
                      style={Styles.delButton}
                      title='Delete'
                      onPress={() =>  handleDeletePress(note.key)}
                      />
                    </View>
                  </View>
                  ))
              }
              </ScrollView>
            </View>
        <Button style={Styles.buttonLogIn} 
            title="Edit" 
            onPress={() => navigation.navigate('Edit')}
            />
        <Button style={Styles.buttonLogIn} 
            title="LogOut" 
            onPress={() => navigation.navigate('Login')}
            />
      </View>
    </SafeAreaView>

  );
}