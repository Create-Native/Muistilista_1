
import { View, Text, SafeAreaView, Button, FlatList } from 'react-native'
import { useEffect, useState } from 'react';
import React from 'react'
import Styles from './Styles';
import {DATA} from './Data';
import Row from './Row';

export default function HomeScreen({navigation }) {

    const [notes, setNotes] = useState([])
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        setNotes(DATA);
      }, [])
    
      const select =(id) => {
        setSelectedId(id);
      }

  return (
   
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.heading}> HomeScreen</Text>
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          renderItem= {({item}) => (         //tässäkin voi määritellä funktion ilman erillistä alihojelmaa
          <Row notes={item}selectedId={selectedId} select={select}/>
          )}
      ></FlatList>
        <Button style={Styles.buttonLogIn} 
            title="LogOut" 
            onPress={() => navigation.navigate('Login')}
            />
      </View>
    </SafeAreaView>

  );
}