import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Bem_Vindo() {

    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <View style={styles.containerLogo}>
                <Animatable.Image
                    delay={1000}
                    animation="flipInY"
                    source={require("../assets/CalcMarket__2_-removebg-preview.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('entrada')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Acessar
                    </Text>
                </TouchableOpacity>
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
        width: '70%',
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
    button: {
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#880000',
        fontWeight: 'bold'
    }
});
