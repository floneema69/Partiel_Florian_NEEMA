import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, { useState,useEffect } from 'react';
import GameList from "./GameItem";
import Header from "./Header";
import JeuxAjoue from "./JeuxAjoue";
import { RadioButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
  const [donner,setdonner] = useState([
    {
      name: "Medal of Honor",
      price: "10",
      catégorie : "FPS",
      image: "https://www.radiofrance.fr/s3/cruiser-production/2020/12/0943738d-0301-4ddb-a8a7-c442e2bcccb0/870x489_gettyimages-1164537342.webp",
      id: 23124
    },
    {
      name: "Street Fighter 2",
      price: "20",
      catégorie : "Combat",
        image: "https://www.radiofrance.fr/s3/cruiser-production/2020/12/0943738d-0301-4ddb-a8a7-c442e2bcccb0/870x489_gettyimages-1164537342.webp",
      id: 12349
    },
    {
      name: "Call of Duty",
      price: "30",
      catégorie : "FPS",
        image: "https://www.radiofrance.fr/s3/cruiser-production/2020/12/0943738d-0301-4ddb-a8a7-c442e2bcccb0/870x489_gettyimages-1164537342.webp",
      id: 549762
    },
    {
      name: "NBA2K5",
      price: "5",
      catégorie : "Sport",
      image: "https://www.radiofrance.fr/s3/cruiser-production/2020/12/0943738d-0301-4ddb-a8a7-c442e2bcccb0/870x489_gettyimages-1164537342.webp",
      id: 549763
    },
    {
      name: "God Of War 2018",
      price: "25",
      catégorie : "Action-Aventure",
      image: "https://www.radiofrance.fr/s3/cruiser-production/2020/12/0943738d-0301-4ddb-a8a7-c442e2bcccb0/870x489_gettyimages-1164537342.webp",
      id: 549764
    },
    {
      name: "The Legend of Zelda : The Wind Walker",
      price: "35",
      catégorie : "Action-Aventure",
        image: "https://www.radiofrance.fr/s3/cruiser-production/2020/12/0943738d-0301-4ddb-a8a7-c442e2bcccb0/870x489_gettyimages-1164537342.webp",
      id: 549765
    },
    {
      name: "Horizon : Forbidden West",
      price: "40",
      catégorie : "Action-Aventure",
        image: "https://www.radiofrance.fr/s3/cruiser-production/2020/12/0943738d-0301-4ddb-a8a7-c442e2bcccb0/870x489_gettyimages-1164537342.webp",
      id: 549766
    },
    {
      name: "Forza Horizon 5",
      price: "45",
      catégorie : "Voiture",
        image: "https://www.radiofrance.fr/s3/cruiser-production/2020/12/0943738d-0301-4ddb-a8a7-c442e2bcccb0/870x489_gettyimages-1164537342.webp",
      id: 549767
    },
    {
      name: "The Last Of Us",
      price: "55",
      catégorie : "Survival horror",
        image: "https://www.radiofrance.fr/s3/cruiser-production/2020/12/0943738d-0301-4ddb-a8a7-c442e2bcccb0/870x489_gettyimages-1164537342.webp",
      id: 549768
    },
    {
      name: "Red Dead Redemption II",
      price: "18",
      catégorie : "Action-Aventure",
        image: "https://www.radiofrance.fr/s3/cruiser-production/2020/12/0943738d-0301-4ddb-a8a7-c442e2bcccb0/870x489_gettyimages-1164537342.webp",
      id: 549769
    }
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [ordre,setordre] = useState(false);
  const [tabnew, settabnew] = useState(donner);

  const odredesjeux = (order) => {
    const sortedGames = [...tabnew].sort((jeux1, jeux2) => {
      if (order === false) {return parseFloat(jeux1.price) - parseFloat(jeux2.price);
      } else {return parseFloat(jeux2.price) - parseFloat(jeux1.price);
      }
    });
    settabnew(sortedGames);
  };
  const filtre = (catégorie) => {
    const filteredGames = [...donner].filter((jeux) => jeux.catégorie === catégorie);
    if(catégorie === 'all') {
      settabnew(donner);
    } else {
      settabnew(filteredGames);
    }
  }
  const ajouejeux = (newGame) => {
    setdonner((prevGames) => prevGames.concat({
      ...newGame,
      id: Math.random().toString(),
      image: "https://www.radiofrance.fr/s3/cruiser-production/2020/12/0943738d-0301-4ddb-a8a7-c442e2bcccb0/870x489_gettyimages-1164537342.webp"
    }));
  };

  useEffect(() => {
    odredesjeux(ordre);
  }, [ordre]);

  return (
      <View style={styles.container}>
        <Header style={styles.header} username="cosmo69" totalGames={donner.length}/>
        <Text>Ordre corisant</Text>
        <RadioButton
            value="cposant"
            onPress={() => setordre(false)}
        />
        <Text>Ordre decroisant</Text>
        <RadioButton
            value="descroisant"
            onPress={() => setordre(true)}
        />
        <RNPickerSelect
            onValueChange={(value) => filtre(value)}
            items={[
              { label: 'all', value: 'all' },
              { label: 'FPS', value: 'FPS' },
              { label: 'Combat', value: 'Combat' },
              { label: 'Sport', value: 'Sport' },
            ]}
        />
        <JeuxAjoue onAddGame={ajouejeux} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        <GameList games={tabnew}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'blue',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 100,
  },
});