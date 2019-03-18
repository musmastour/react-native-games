import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import GameList from './src/GameList'
import { Icon } from 'react-native-elements'

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{margin: 30}}> 
          
          <View style={styles.titleContainer}>

            <Icon name="gamepad" type='font-awesome' size={34} />
            <Text style={styles.title}>Hello Games</Text>

          </View>

          <ScrollView style={styles.listContainer}>
              <GameList/>
          </ScrollView>

        </View>
      </View>
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
