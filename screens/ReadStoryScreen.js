import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <SafeAreaProvider>
                <Header backgroundColor="#9854cb" centerComponent={{text:'Story Hub', style:{color: 'white', fontSize:20}}}/>
            <View style={styles.container}>
              <Text style={styles.displayText}>Read Story</Text>
            </View>
            </SafeAreaProvider>
        )
    }
}

const styles= StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ddacf5',
    },
    displayText:{
      fontSize: 30,
      textAlign: 'center'
    },
});