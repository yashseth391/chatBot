import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const WelcomeScreen = () => {
    const navigator = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Jarvis</Text>
                <Text style={styles.headerSubTitle}>Powered by AI</Text>
            </View>
            <View style={styles.body}>
                <Image source={require("../../assests/bot.jpeg")} style={styles.image} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigator.navigate("Home")}>
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
        fontSize: wp('10%'),
        fontWeight: 'bold',
        color: "green"
    },
    headerSubTitle: {
        textAlign: 'center',
        fontSize: wp('5%'),
        color: "green"
    },
    image: {
        height: wp('75%'),
        width: wp('75%'),
    },
    textButton: {
        textAlign: 'center',
        fontSize: wp('6%'),
        color: "white",
        fontWeight: 'bold'
    }
})