import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6495ed',
        paddingTop: Platform.OS === 'android' ? Constants.StatusBarheight: 0,
      },
      heading: {
        fontSize: 40,
        marginLeft: 40,
        marginTop: 40,
      },
      message: {
        display: 'flex',
        flexDirection: 'row',
        padding:10,
        marginTop:5,
        marginBottom:10,
        width: '75%',
        backgroundColor: '#fffacd',
        borderColor: '#ff4500',
        borderWidth: 1,
        borderRadius5: 5,
        marginLeft: 10,
        marginRight: 10,
      },
      input: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around',
        borderColor: '#ff4500',
        typecol: '#ff4500',
        borderWidth: 1,
        borderRadius5: 5,
        marginTop:100,
        marginBottom:20,
        marginLeft: 20,
        marginRight: 20,
       
      },
})