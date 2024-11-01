import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
    const navigator = useNavigation();
    return (

        <TouchableOpacity onPress={() => navigator.navigate('WelcomeScreen')}>
            <Text style={styles.txt}>HomeScreen</Text>
        </TouchableOpacity>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    txt: {
        fontSize: 30,
        color: 'red'
    }
})