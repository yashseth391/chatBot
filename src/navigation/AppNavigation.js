import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const stack = createNativeStackNavigator();

const Navigator = () => (
    <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <stack.Screen name="Home" component={HomeScreen} />

    </stack.Navigator>
)
function AppNavigation() {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    );
}

export default AppNavigation;