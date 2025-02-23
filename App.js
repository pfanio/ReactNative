import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [item, setItem] = useState('');
  const [objList, setObjList] = useState([]);

  function addToList() {
    setObjList((listAtual) => [...listAtual, item]);
  }

  function removeItem(item) {
    console.log(item)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.input}
          onChangeText={setItem}
          value={item}
          placeholder='Seu objetivo'
        >
        </TextInput>
        <Button title='Adicionar' onPress={addToList} />
      </View>
      <View style={styles.list}>
        <ScrollView>
          {objList.map((obj) =>
            <View style={styles.listItem}>
              <Text style={styles.textItem} key={obj}>{obj}</Text>
            </View>)}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 16
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 24
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8
  },
  list: {
    flex: 5,
  },
  listItem: {
    backgroundColor: '#5e0acc',
    margin: 8,
    padding: 8,
    borderRadius: 6
  },
  textItem: {
    color: 'white'
  }
});
