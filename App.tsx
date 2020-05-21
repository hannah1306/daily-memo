import React from 'react';
import { Text, View } from 'react-native';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Chat" component={ChatScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );  
}
