import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons/';
import { useNavigation } from '@react-navigation/native';

export default function Page1() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}> 
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('entrada')}>
                <Ionicons size={25} color={"#fff"} name="arrow-back-outline" />
            </TouchableOpacity>
            <Animatable.Image
                source={require("../assets/CalcMarket__2_-removebg-preview.png")}
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
                            <View style={styles.rectangle}></View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={() => console.log('soma')}>
                            <Text style={styles.addButtonText}>Adicionar</Text>
                        </TouchableOpacity>
                    <View style={styles.squareContainer}>
                        <View style={styles.squareItem}>
                            <Image
                                source={require('../assets/image/image12.png')}
                                style={[styles.squareImage, { width: 100, height: 100 }]}
                                resizeMode="contain"
                            />
                            <View style={styles.rectangle}></View>
                        </View>        
                    </View>
                      <TouchableOpacity style={styles.addButton} onPress={() => console.log('soma')}>
                            <Text style={styles.addButtonText}>Adicionar</Text>
                        </TouchableOpacity>
                    <View style={styles.squareContainer}>
                        <View style={styles.squareItem}>
                            <Image
                                source={require('../assets/image/image13.png')}
                                style={styles.squareImage}
                                resizeMode="contain"
                            />
                            <View style={styles.rectangle}></View>
                        </View>
                    </View>
                     <TouchableOpacity style={styles.addButton} onPress={() => console.log('soma')}>
                            <Text style={styles.addButtonText}>Adicionar</Text>
                        </TouchableOpacity>
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
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 10, // Ajuste conforme necessário para o layout
    },
    squaresContainer: {
        marginTop: 20,
        marginLeft: 20, // Ajusta o espaçamento à esquerda
        alignItems: 'flex-start', // Alinha os itens à esquerda
    },
    squareContainer: {
        flexDirection: 'row', // Para alinhar o retângulo ao lado da imagem
        alignItems: 'center', // Para centralizar verticalmente a imagem e o retângulo
        marginBottom: 1, // Adiciona espaço entre os quadrados
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
    rectangle: {
        width: 200,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    addButton: {
        backgroundColor: '#3F9AC1',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 250,
        
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 16,
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
