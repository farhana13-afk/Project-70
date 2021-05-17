import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <SafeAreaProvider>
                <Header backgroundColor="#9854cb" centerComponent={{text:'Story Hub', style:{color: 'white', fontSize:20}}}/>
            <View style={styles.container}>
              <TextInput 
              style={styles.inputTitleBox}
              placeholder="Story Title"/>
              <TextInput 
              style={styles.inputAuthorNameBox}
              placeholder="Author"/>
              <TextInput 
              style={styles.inputStoryBox}
              placeholder="Write your story here."/>
              <TouchableOpacity style={styles.sumbitButton}>
                <Text style={styles.buttonText}>Sumbit</Text>
              </TouchableOpacity>
            </View>
            </SafeAreaProvider>
            
        );
    }
}

const styles= StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ddacf5'
    },
    buttonText:{
      fontSize: 25,
      textAlign: 'center',
      marginTop: 10, 
      color: 'white'
    },
    inputTitleBox:{
      width: 315,
      height: 35,
      borderWidth: 2,
      fontSize: 20,
      marginTop: 25, 
      textAlign: 'center',
    },
    inputAuthorNameBox:{
      width: 315,
      height: 35,
      borderWidth: 2,
      fontSize: 20,
      marginTop: 25, 
      textAlign: 'center',
    },
    inputStoryBox:{
      width: 315,
      height: 275,
      borderWidth: 2,
      fontSize: 20,
      marginTop: 25, 
      textAlign: 'center',
      multiline: 'true',
    },
    sumbitButton:{
      marginTop: 30,
      backgroundColor: '#9854cb',
    }
});