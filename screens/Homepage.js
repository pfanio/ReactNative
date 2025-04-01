import { SafeAreaView, Text, View, StyleSheet, 
         TextInput, TouchableOpacity, Image, Alert } from 'react-native';

import { useState } from 'react';

function Homepage({afterDefineTimes}) {

    const [totalTimes, setTotalTimes] = useState('2');
    console.log(totalTimes)

    function inputHandler(value) {
        setTotalTimes(value);
    }

    function subtract() {
        if (parseInt(totalTimes) > 2) {
            setTotalTimes((parseInt(totalTimes) - 1).toString());
        }
    }

    function plus() {
        if (parseInt(totalTimes) < 8) {
            setTotalTimes((parseInt(totalTimes) + 1).toString());
        }
    }

    function startCampeonato(){
        const qtdTimes = parseInt(totalTimes);

        if(qtdTimes < 2 || qtdTimes > 8 || isNaN(qtdTimes)){
            Alert.alert('Atenção','Quantidade de times deve estar entre 2 e 8!',
                [{
                    text: 'OK',
                    onPress: ()=>setTotalTimes('2'),
                    style: 'cancel'
                }]
            );
            return;
        }
        else{
            afterDefineTimes(qtdTimes);
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Nosso campeonato</Text>
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.title}>Total de Times:</Text>
                <TextInput
                    style={styles.input}
                    maxLength={1}
                    keyboardType='number-pad'
                    value={totalTimes}
                    onChangeText={inputHandler}
                />
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity onPress={subtract}>
                    <Text style={styles.buttonsAddSub}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={plus}>
                    <Text style={styles.buttonsAddSub}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerBola}>
                <TouchableOpacity onPress={startCampeonato}>
                    <Image source={require('../assets/images/bola.png')} style={styles.bola} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Homepage;

const styles = StyleSheet.create({

    containerTitle: {
        margin: 80,
        borderColor: "#000000",
        borderWidth: 5,
        borderRadius: 8,
    },
    title: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: 50,
        backgroundColor: "black",
        color: "#cabe10",
    },
    containerInput: {
        margin: 50,
        borderColor: "#050505",
        borderWidth: 5,
        borderRadius: 8,
        flexDirection: "row",
    },
    input: {
        fontSize: 25,
        paddingHorizontal: "auto",
        borderBottomColor: "#a89e09",
        borderBottomWidth: 1,
        backgroundColor: "black",
        color: "#cabe10",
        margin: "auto",
        flex: 1,
        textAlign: "center"
    },
    containerButtons: {
        flexDirection: "row",
        marginHorizontal: 40,
        justifyContent: "space-evenly"
    },
    buttonsAddSub: {
        padding: 20,
        fontSize: 30,
        backgroundColor: "#cabe10",
        fontWeight: "bold",
        borderRadius: 8
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
