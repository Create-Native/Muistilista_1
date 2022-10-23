import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? Constants.StatusBarheight: 0,
      },
      heading: {
        fontSize: 50,
        marginLeft: 40,
        marginTop: 40,
      },
      buttonLogIn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      buttonSave: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        paddingTop: 30 ,
      },
      message: {
        padding:10,
        marginTop:10,
        marginBottom:10,
        width: '75%',
        backgroundColor: '#f5f5f5',
        borderColor: '#ccc',
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
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius5: 5,
        marginTop:100,
        marginBottom:20,
        marginLeft: 20,
        marginRight: 20,
      },
})