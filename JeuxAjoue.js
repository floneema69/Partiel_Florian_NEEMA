import React, { useState } from 'react';
import { Button, TextInput, View, Modal } from 'react-native';

const JeuxAjoue = ({ onAddGame }) => {
    const [name, setname] = useState('');
    const [price, setPrice] = useState('');
    const [catégorie, setcatégorie] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const Submit = () => {
        onAddGame({ name, price, catégorie });
        setname('');
        setPrice('');
        setcatégorie('');
        setModalVisible(false);
    };
    return (
        <View>
            <Button title="Ajouter un jeu ヾ（ ❀◕◡◕ฺฺ ）ノ" onPress={() => setModalVisible(true)} />
            <Modal
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ margin: 50, padding: 20, backgroundColor: 'white' }}>
                    <TextInput
                        value={name}
                        onChangeText={setname}
                        placeholder="Titre"
                    />
                    <TextInput
                        value={price}
                        onChangeText={setPrice}
                        placeholder="Tarif"
                    />
                    <TextInput
                        value={catégorie}
                        onChangeText={setcatégorie}
                        placeholder="Catégorie"
                    />
                    <Button title="+" onPress={Submit} />
                    <Button title="Annuler" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
};

export default JeuxAjoue;