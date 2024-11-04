import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/AppNavigation'
import { apiCall } from './src/api/Open_AI'
import { dummyMessages } from './src/constant/Messages'








const App = () => {

  return (
    <AppNavigation />
  )
}

export default App

const styles = StyleSheet.create({})