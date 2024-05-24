import React, { useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons/';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Soma() {

    const navigation = useNavigation();

  const [taskList, setTaskList] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [priceInput, setPriceInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '' && priceInput.trim() !== '') {
      setTaskList([...taskList, { id: Date.now().toString(), text: taskInput, price: parseFloat(priceInput) }]);
      setTaskInput('');
      setPriceInput('');
    } else {
      Alert.alert('Erro', 'Por favor, preencha ambos os campos.');
    }
  };

  const deleteTask = id => {
    setTaskList(taskList.filter(task => task.id !== id));
  };

  const calculateTotalPrice = () => {
    const total = taskList.reduce((sum, task) => sum + task.price, 0);
    Alert.alert('Preço total', `R$ ${total.toFixed(2)}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.text} - R$ {item.price.toFixed(2)}</Text>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteButton}>Excluir</Text>
      </TouchableOpacity>
     
    </View>
  );

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('entrada')}>
                <Ionicons size={25} color={"#fff"} name="arrow-back-outline" />
            </TouchableOpacity>
            <Animatable.Image
                source={require("../assets/CalcMarket.png")}
                style={styles.logo}
                resizeMode="contain"
                
            />
        <Text style={styles.title}>Lista de produtos</Text>
      
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Produto"
            value={taskInput}
            onChangeText={text => setTaskInput(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Preço"
            value={priceInput}
            onChangeText={text => setPriceInput(text)}
            keyboardType="numeric"
          />
          <Button title="Adicionar" onPress={addTask} />
        </View>
        <FlatList
          data={taskList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.taskList}
        />
      </View>
      <View style={styles.footer}>
        <Button title="Calcular Preço Total" onPress={calculateTotalPrice} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003865',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
},
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
},
  header: {
    width: '100%',
    backgroundColor: '#003865',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 20,
  },
  topImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  inputContainer: {
    width: '90%',
    backgroundColor: '#B3DFFC',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    flex: 1,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  taskText: {
    flex: 1,
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
});
