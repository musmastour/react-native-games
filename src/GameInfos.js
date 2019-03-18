import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default class GameInfos extends React.Component {

    state = {
        games: '',
        isLoaded: false
    }

    componentDidMount() {
    }


  render() {
     
            return (
                <Text>Pas de données.</Text>
            )
        
    }
}

const styles = StyleSheet.create({
  container: {
  },
  itemContainer: {
      alignSelf: 'stretch',
      backgroundColor: '#F3F0EE',
      marginVertical: 10,
      paddingVertical: 20,
      borderRadius: 15,      
  },
  gameTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginStart: 10
    }
});