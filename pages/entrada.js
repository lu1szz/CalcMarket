import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons/';
import { useNavigation } from '@react-navigation/native';

export default function Acesso() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}> 
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('index')}>
                <Ionicons size={25} color={"#fff"} name="arrow-back-outline" />
            </TouchableOpacity>
            <Animatable.Image
                delay={1000}
                animation="flipInY"
                source={require("../assets/CalcMarket__2_-removebg-preview.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <View style={{ marginTop: 22 }}>
                    <View style={styles.squaresContainer}>
                        <View style={styles.squareRow}>
                            <TouchableOpacity style={styles.squareContainer} onPress={() => navigation.navigate('page1')}>
                                <Image
                                    source={require('../assets/image/image1.png')}
                                    style={styles.squareImage}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.squareContainer} onPress={() => navigation.navigate('page2')}>
                                <Image
                                    source={require('../assets/image/image2.png')}
                                    style={styles.squareImage}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.squareRow}>
                            <TouchableOpacity style={styles.squareContainer} onPress={() => navigation.navigate('page3')}>
                                <Image
                                    source={require('../assets/image/image3.png')}
                                    style={styles.squareImage}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.squareContainer} onPress={() => navigation.navigate('page4')}>
                                <Image
                                    source={require('../assets/image/image4.png')}
                                    style={styles.squareImage}
                                    resizeMode="contain"
                                />
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
    containerLogo: {
        alignItems: 'center',
        marginTop: 40,
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    squaresContainer: {
        marginTop: 20,
    },
    squareRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    squareContainer: {
        width: 130,
        height: 130,
        backgroundColor: '#3F9AC1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        marginHorizontal: 20,
    },
    squareImage: {
        width: '50%',
        height: '80%',
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
