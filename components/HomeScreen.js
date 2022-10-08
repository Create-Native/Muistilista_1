
import { View, Text, SafeAreaView, Button, FlatList, ScrollView } from 'react-native'
import { useEffect, useState } from 'react';
import React from 'react'
import Styles from './Styles';
import {DATA} from './Data';
import Row from './Row';

export default function HomeScreen({route, navigation }) {

    /* const [notes, setNotes] = useState([]) */
    const [selectedId, setSelectedId] = useState(null);

      const [notes, setNotes] = useState(
      Array(5).fill('').map((_,i)=> (`Test`))
  );

        useEffect(() => {
        setNotes(DATA);
      }, []) 
    
        const select =(id) => {
        setSelectedId(id);
      } 

      useEffect(() => {
        if(route.params?.note) {
            const newNotes = [...notes, route.params.note];
            setNotes(newNotes);
        }
    },[route.params?.note])

  return (
   
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.heading}> HomeScreen</Text>
                <ScrollView>
                {
                    notes.map((note,index) => (
                        <View key={index} style={Styles.rowContainer}>
                            <Text style={Styles.rowText}>{note}</Text>
                        </View>
                    ))
                }
            </ScrollView>
{/*          <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          renderItem= {({item}) => (         //tässäkin voi määritellä funktion ilman erillistä alihojelmaa
          <Row notes={item}selectedId={selectedId} select={select} />         
          )}
      ></FlatList> */}
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