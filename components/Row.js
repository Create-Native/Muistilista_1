import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export default function Row({notes, selectedId, select}){

    const backgroundColor = notes.id === selectedId ? '#c0c0c0': '#f5f5f5';

    return(
        <Pressable onPress={() => select(notes.id)}>
            <Text
            style={[StyleSheet.row,{backgroundColor}]}>
                {notes.note}
            </Text>
        </Pressable>

        
    )
}