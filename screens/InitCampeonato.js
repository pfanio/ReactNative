import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, FlatList } from 'react-native';
import Confrontos from './Confrontos';

function InitCampeonato({ qtdTimes }) {
    const [times, setTimes] = useState(Array(qtdTimes).fill(''));
    const [timesCadastrados, setTimesCadastrados] = useState(false);

    const handleTimeChange = (text, index) => {
        const newTimes = [...times];
        newTimes[index] = text;
        setTimes(newTimes);
    };

    const allTimesFilled = times.every(time => time.trim() !== '');

    function onTimesSubmit(){
        setTimesCadastrados(true);
    }

    return (
        <View>
            {
            !timesCadastrados ? 
            (
                <View style={styles.container}>
                    <Text style={styles.title}>Cadastro de Times</Text>

                    {times.map((time, index) => (
                        <View key={index} style={styles.inputContainer}>
                            <Text>Time {index + 1}</Text>
                            <TextInput
                                style={styles.input}
                                value={time}
                                onChangeText={(text) => handleTimeChange(text, index)}
                                placeholder={`Nome do Time ${index + 1}`}
                            />
                        </View>
                    ))}

                    <Button
                        title="Gerar Confrontos"
                        onPress={() => onTimesSubmit(times)}
                        disabled={!allTimesFilled}
                    />
                </View>
            )
            :
            (
                <View>
                    <Confrontos times={times}></Confrontos>
                </View>
            )}
        </View>
    );
}

export default InitCampeonato;

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
    inputContainer: {
      marginBottom: 15,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginTop: 5,
      borderRadius: 5,
      backgroundColor: 'white',
    }
  });