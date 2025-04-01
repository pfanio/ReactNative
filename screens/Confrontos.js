import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import InitCampeonato from './InitCampeonato';

function Confrontos({ times }) {
    // Gerar todos os confrontos possíveis (sem repetição)
    const [goBack, setGoBack] = useState(false);

    function restartCampeonato() {
        setGoBack(true);
    }

    const confrontos = [];
    for (let i = 0; i < times.length; i++) {
        for (let j = i + 1; j < times.length; j++) {
            confrontos.push(`${times[i]} vs ${times[j]}`);
        }
    }

    return (
        <>
            {!goBack ? (
                <View style={styles.container}>
                    <Text style={styles.title}>Lista de Confrontos</Text>
                    <FlatList
                        data={confrontos}
                        renderItem={({ item }) => <Text style={styles.confrontoItem}>{item}</Text>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <View style={styles.containerBola}>
                        <TouchableOpacity onPress={restartCampeonato}>
                            <Image source={require('../assets/images/bola-back.png')} style={styles.bola} />
                        </TouchableOpacity>
                    </View>
                </View>
            )
                :
            (
                <InitCampeonato qtdTimes={times.length} />
            )
            }
        </>
    );
}

export default Confrontos;

const styles = StyleSheet.create({

    container: {
        margin: 20,
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    confrontoItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
    },
    bola: {
        borderWidth: 2,
        width: 100,
        height: 100,
        borderColor: "#cabe10",
        borderRadius: 50
    },
    containerBola: {
        margin: 20,
        alignItems: "center"
    }
});