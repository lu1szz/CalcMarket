import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Page1() {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const addProduct = (id, product, price) => {
        setSelectedProducts([...selectedProducts, { id, product, price }]);
        setSuccessMessage(`${product} foi adicionado.`);
        setShowSuccessAlert(true);

        // Fechar o alerta de sucesso automaticamente após 2 segundos
        setTimeout(() => {
            setShowSuccessAlert(false);
        }, 2000);
    };

    const finalizeSelection = () => {
        if (selectedProducts.length === 0) {
            Alert.alert('Erro', 'Por favor, selecione pelo menos um produto.');
            return;
        }
        navigation.navigate('soma', { products: selectedProducts });
    };

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
                    {[
                        { id: '1', image: require('../assets/image/image5.png'), price: 4.99, name: 'Produto 1' },
                        { id: '2', image: require('../assets/image/image6.png'), price: 9.98, name: 'Produto 2' },
                        { id: '3', image: require('../assets/image/image7.png'), price: 11.97, name: 'Produto 3' },
                        // Adicione mais produtos aqui conforme necessário
                    ].map((item) => (
                        <View key={item.id} style={styles.productContainer}>
                            <Image
                                source={item.image}
                                style={styles.squareImage}
                                resizeMode="contain"
                            />
                            <View style={styles.productDetails}>
                                <Text style={styles.text}>R$ {item.price.toFixed(2)}</Text>
                                <TouchableOpacity
                                    style={styles.addButton}
                                    onPress={() => addProduct(item.id, item.name, item.price)}
                                >
                                    <Text style={styles.addButtonText}>Adicionar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
                {showSuccessAlert && (
                    <Animatable.View animation="fadeIn" style={styles.successAlert}>
                        <Text style={styles.successText}>{successMessage}</Text>
                    </Animatable.View>
                )}
                <TouchableOpacity style={styles.finalizeButton} onPress={finalizeSelection}>
                    <Text style={styles.finalizeButtonText}>Finalizar Seleção</Text>
                </TouchableOpacity>
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
        marginTop: 10,
    },
    containerForm: {
        backgroundColor: "#003865",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    squaresContainer: {
        marginTop: -15,
        marginLeft: 20,
        alignItems: 'flex-start',
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    squareImage: {
        width: 100,
        height: 100,
        backgroundColor: '#3F9AC1',
        borderRadius: 40,
        marginRight: 20,
    },
    productDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
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
        marginLeft: 20,
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    finalizeButton: {
        backgroundColor: '#3F9AC1',
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignSelf: 'center',
        marginTop: 20,
    },
    finalizeButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    successAlert: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    successText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
