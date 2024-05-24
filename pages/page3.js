import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons/';
import { useNavigation } from '@react-navigation/native';

export default function Page3() {
    
    const navigation = useNavigation();
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
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <View style={styles.squaresContainer}>
                    <View style={styles.squareContainer}>
                        <View style={styles.squareItem}>
                            <Image
                                source={require('../assets/image/image11.png')}
                                style={styles.squareImage}
                                resizeMode="contain"
                            />
                            
                                <Text style={styles.text}>R$</Text>
                            
                            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('soma')}>
                                <Text style={styles.addButtonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.squareContainer}>
                        <View style={styles.squareItem}>
                            <Image
                                source={require('../assets/image/image12.png')}
                                style={[styles.squareImage, { width: 100, height: 100 }]}
                                resizeMode="contain"
                            />
                            
                                <Text style={styles.text}>R$</Text>
                            
                            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('soma')}>
                                <Text style={styles.addButtonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>        
                    </View>
                    <View style={styles.squareContainer}>
                        <View style={styles.squareItem}>
                            <Image
                                source={require('../assets/image/image13.png')}
                                style={styles.squareImage}
                                resizeMode="contain"
                            />
                            
                                <Text style={styles.text}>R$</Text>
                            
                            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('soma')}>
                                <Text style={styles.addButtonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Animatable.View>
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
        width: 170,
        height: 170,
        alignSelf: 'center',
        marginTop: 10, // Ajuste conforme necessário para o layout
    },
    squaresContainer: {
        marginTop: -15,
        marginLeft: 20, // Ajusta o espaçamento à esquerda
        alignItems: 'flex-start', // Alinha os itens à esquerda
    },
    squareContainer: {
        flexDirection: 'row', // Para alinhar o retângulo ao lado da imagem
        alignItems: 'center', // Para centralizar verticalmente a imagem e o retângulo
        marginBottom: 50, // Adiciona espaço entre os quadrados
    },
    squareItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    squareImage: {
        width: 100,
        height: 100,
        backgroundColor: '#3F9AC1',
        borderRadius: 40,
        marginRight: 20, // Adiciona espaço entre a imagem e o retângulo
    },
    text: {
        fontSize: 20,
        color: '#FFF',
    },
    addButton: {
        backgroundColor: '#3F9AC1',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    containerForm: {
        backgroundColor: "#003865",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
});
