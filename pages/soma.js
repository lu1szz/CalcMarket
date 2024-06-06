import React, { useState, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons/';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Soma() {
    const navigation = useNavigation();
    const route = useRoute();
    const [taskList, setTaskList] = useState(route.params?.products || []);

    useEffect(() => {
        if (route.params?.products) {
            setTaskList(route.params.products);
        }
    }, [route.params?.products]);

    const deleteTask = id => {
        const updatedTaskList = taskList.filter(task => task.id !== id);
        setTaskList(updatedTaskList);
    };

    const calculateTotalPrice = () => {
        const total = taskList.reduce((sum, task) => sum + task.price, 0);
        Alert.alert('Preço total', `R$ ${total.toFixed(2)}`);
    };

    const renderItem = ({ item }) => (
        <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.product} - R$ {item.price.toFixed(2)}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Ionicons name="trash-outline" size={24} color="red" />
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
            <FlatList
                data={taskList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.taskList}
            />
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
    title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 15,
        textAlign: 'center',
    },
    taskList: {
        flex: 1,
        marginHorizontal: 20,
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
    footer: {
        padding: 20,
        alignItems: 'center',
    },
});
