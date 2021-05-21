import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default function App() {
  return (
      <AppContainer/>
      );
    }
    
  const TabNavigator = createBottomTabNavigator({
      Write: {screen:WriteStoryScreen},
      Read: {screen:ReadStoryScreen}
  },
    
{defaultNavigationOptions: ({navigation}) =>({
      tabBarIcon:()=>{
        const routeName= navigation.state.routeName;
    
        if(routeName=== 'Write'){
          return(
            <Image 
            source={require('./assets/write.png')} 
            style={{width: 30, height: 30}}/>
          )
        }
        else if(routeName === 'Read'){
          return(
            <Image 
            source={require('./assets/read.png')} 
            style={{width: 25, height: 25}}/>
           )
        }
      }
    })} )
    
  const AppContainer = createAppContainer(TabNavigator);

