import { View, Text, StyleSheet, Pressable } from 'react-native'
import {useState, React} from 'react'

export default function Radiobutton({cleared}) {

    const [value, setValue] = useState(1)

  return (
    <>
    {
            <View style={styles.buttonContainer}>
                <Pressable style={styles.circle} 
                    onPress={() => setValue(cleared)}>
                    {value === cleared && <View style={styles.checkedCircle} />}
                </Pressable>
            </View>
    }
    </>
  )
}

const styles = StyleSheet.create({
buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '20%',
},
  circle: {
    height: 28,
    width: 28,
    borderRadius: 15,
    borderWidth:1,
    borderColor:'#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: '#000',
  },
})