import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const GameList = ({games}) => (
    <ScrollView>
        {games.map(game => (
            <View key={game.id} style={styles.item}>
                <Text>{game.name} </Text>
                <Text> {game.price}€</Text>
                <Text>{game.catégorie}</Text>
                <Image source={{ uri: game.image }} style={styles.image} />
            </View>
        ))}
    </ScrollView>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    image: {
        width: 50,
        height: 50,
    },
});

export default GameList;