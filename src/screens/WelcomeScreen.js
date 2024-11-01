import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigator = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Jarvis</Text>
                <Text style={styles.headerSubTitle}>Powered by AI</Text>
            </View>
            <View style={styles.body}>
                <Image source={require("../../assests/Welcome.jpeg")} />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    body: {
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "green",
        margin: 20,
        padding: 10,
        borderRadius: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
    header: {
        spaceBetween: 20,
    },

    headerText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: "green"
    },
    headerSubTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: "green"
    },
    textButton: {
        textAlign: 'center',
        fontSize: 20,
        color: "white",
        fontWeight: 'bold'
    }
})