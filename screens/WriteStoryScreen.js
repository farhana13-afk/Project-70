import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as firebase from 'firebase';
import db from '../config';

export default class WriteStoryScreen extends React.Component{
constructor(props){
  super(props);
  this.state={
    title:'',
    author:'',
    story:'',
  };
}
sumbitStory=()=>{
  var transactioMessage;
  db.collection('Write_Story_Details').add({
          'Story_Title': this.state.title,
           'Author_Name': this.state.author,
           'Written_Story': this.state.story,
        });
    ToastAndroid.show("Story Submited", ToastAndroid.SHORT)
 
}
 render(){
        return(
            <SafeAreaProvider>
                <Header backgroundColor="#9854cb" 
                centerComponent={{text:'Story Hub', style:{color: 'white', fontSize:20}}}/>
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
              <TextInput 
              style={styles.inputTitleBox}
              placeholder="Story Title"
              onChangeText={
                text=>this.setState({
                  title: text
                })}
                value={this.state.title}/>
              <TextInput 
              style={styles.inputAuthorNameBox}
              placeholder="Author"
              onChangeText={
                text=>this.setState({
                  author: text
                })
              }
              value={this.state.author}/>
              <TextInput 
              style={styles.inputStoryBox}
              placeholder="Write your story here."
              onChangeText={
                text=>this.setState({
                  story: text
                })}
                value={this.state.story}/>
              <TouchableOpacity 
              style={styles.sumbitButton}
             onPress={()=>{
              this.sumbitStory();
               this.setState({
                 title: '',
                 author: '',
                 story: '',
               })
              }}>
                <Text style={styles.buttonText}>Sumbit</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
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