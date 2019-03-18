import React from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation'
import GameList from './../src/GameList'
import GameInfos from './../src/GameInfos'
import GameHome from './../src/GameHome'

const stack = createStackNavigator({
    GameHome: {
      screen: GameHome,
      navigationOptions: () => ({
          header: null,
        headerTruncatedBackTitle: 'Retour', 
      }),

    },
    GameInfos: {
        screen: GameInfos,
        navigationOptions: () => ({
            header: null,
          headerTruncatedBackTitle: 'Retour', 
        }),
  
      },
        initialRouteName: GameHome    
  });
  
  export default createAppContainer(stack);