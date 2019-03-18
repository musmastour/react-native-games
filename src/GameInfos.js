import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Icon } from 'react-native-elements'

export default class GameInfos extends React.Component {

    state = {
        game_id: '',
        details: '',
        isLoaded: false
    }


    componentWillMount() {
        const id = this.props.navigation.getParam('game_id')
        this.setState({
            game_id: id
        }, () => {
            this.getGamesDetails()
        })
    }

    async getGamesDetails() {
        return await fetch('https://androidlessonsapi.herokuapp.com/api/game/details?game_id=' + this.state.game_id)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            this.setState({
            details: responseJson,
            isLoaded: true,
            })
        })
        .catch((error) => {
        console.error(error);
        });
    }

  render() {
        return (
            <View style={styles.container}>

                <View style={styles.titleContainer}>
                    <Text style={styles.gameTitle}>{this.state.details.name}</Text>
                </View>

                <View style={styles.gameDetails}>
                    <Text style={styles.textDetails}>Players: {this.state.details.players}</Text>
                    <Text style={styles.textDetails}>Type: {this.state.details.type}</Text>
                    <Text style={styles.textDetails}>Year: {this.state.details.year}</Text>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.textDetails}>
                        {this.state.details.description_en}
                    </Text>
                </View>

                <TouchableOpacity style={styles.descriptionContainer} onPress={() => {
                        Linking.openURL(this.state.details.url).then((url) => {
                            if (url) {
                              console.log('Initial url is: ' + url);
                            }
                          }).catch(err => console.error('An error occurred', err));}}>
                    <Text style={styles.textMoreDetails}>More details</Text>
                    <Icon name="question-circle" type='font-awesome' size={30} />
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#A9E4EF',
    },
    gameTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginStart: 10
    },
    gameDetails: {
        marginStart: 30,
    },
    textDetails: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 3
    },
    titleContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        height: '10%',
        justifyContent: 'center',
        margin: 30,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    descriptionContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        padding: 20
    },
    textMoreDetails: {
        fontSize: 24,
        fontWeight: 'bold',
        marginEnd: 5
    },
    
});