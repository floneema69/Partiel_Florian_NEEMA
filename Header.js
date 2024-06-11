import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({username, totalGames }) => (
    <View style={styles.header}>
        <Text>Mon compte</Text>
        <Text style={styles.username}>{username} </Text>
        <Text style={styles.totalGames}>nombre de jeux :{totalGames}</Text>
    </View>
)
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f8f8f8',
        marginTop: 50,
    },
    username: {
        fontSize: 20,
    },
    totalGames: {
        fontSize: 20,
    },
});

export default Header;