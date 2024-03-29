import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import GameList from './src/GameList'
import GameInfos from './src/GameInfos'
import GameHome from './src/GameHome'
import GameNavigation from './navigation/GameNavigation'
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator, createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation'

export default class App extends React.Component {

  render() {
    return (
      <GameNavigation/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9E4EF',
  },
  titleContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    height: '20%',
    justifyContent: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginStart: 7
  },
  listContainer: {
    height: '60%'
  }

});
