import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/AppNavigation'


const message = () => (
  <View>
    <Text>message</Text>
  </View>
)
const messageDetail = () => (
  <View>
    <Text>messageDetail</Text>
  </View>
)

const stack = createNativeStackNavigator();


const App = () => {
  return (
    <AppNavigation />
  )
}

export default App

const styles = StyleSheet.create({})