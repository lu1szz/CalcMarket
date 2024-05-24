import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Bem_Vindo() {

    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('entrada');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container} >
            <View style={styles.containerLogo}>
                <Animatable.Image
                    delay={1000}
                    animation="flipInY"
                    source={require("../assets/CalcMarket.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View  style={styles.containerForm}>
                <Text style={styles.buttonText}>
                    Entrando...
                </Text>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#003865',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '90%',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#003865',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: -20,
    },
});
