import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Features = () => {
    return (
        <View style={styles.outside}>
            <View style={styles.container}>
                <Text style={styles.txt}>Features</Text>
                <View style={styles.header}>
                    <Text style={styles.txt2}>Can Provide you with instant and knowledgeable responses</Text>
                </View>
                <View style={styles.header2}>
                    <Text style={styles.txt2}>Assist you with creative ideas on the wide range of topics</Text>
                </View>
                <View style={styles.header3}>
                    <Text style={styles.txt2}>Can generate imaginative and diverse images from textual descriptions</Text>
                </View>
            </View>
        </View>
    )
}

export default Features

const styles = StyleSheet.create({
    container: {
        height: hp('60%'),
        spaceBetween: 20,
    },
    chatBot: {

    },
    header: {
        backgroundColor: "#d5f3be",
        padding: hp('1%'),
        borderRadius: 20,
        margin: hp('1%'),
    },
    header2: {
        backgroundColor: "#f3bef3",
        padding: hp('1%'),
        borderRadius: 20,
        margin: hp('1%'),
    },
    header3: {
        backgroundColor: "#f3bebe",
        padding: hp('1%'),
        borderRadius: 20,
        margin: hp('1%'),
    },
    outside: {
        backgroundColor: 'white',
        flex: 1,
        margin: 10
    },
    txt: {
        fontSize: wp('10%'),

        color: 'green',
        fontWeight: '700'
    },
    txt2: {
        fontSize: wp('6%'),
        textAlign: "center",
        color: 'Black',
        fontWeight: '700'
    }
})