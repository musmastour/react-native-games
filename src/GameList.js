import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


export default class GameList extends React.Component {

    state = {
        games: '',
        isLoaded: false
    }

    componentDidMount() {
        this.getGamesList()
    }

    async getGamesList() {
        return await fetch('https://androidlessonsapi.herokuapp.com/api/game/list/')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            this.setState({
            games: responseJson,
            isLoaded: true,
            })
        })
        .catch((error) => {
        console.error(error);
        });
    }

  render() {
      if (this.state.isLoaded) {
        return (
            <View style={styles.container}>
            {
                this.state.games.map((item, index) => (
                    <TouchableOpacity key={item.id} style={styles.itemContainer}>
                        <Text style={styles.gameTitle}>{item.name}</Text>
                    </TouchableOpacity>
                ))
            }
            </View>
        );}
        else {
            return (
                <Text>Pas de données.</Text>
            )
        }
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