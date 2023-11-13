import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Pokedex from './screens/Pokedex'
import Pokemon from './screens/Pokemon'
import Home from './screens/Home'


const Stack =createNativeStackNavigator()


export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Pokedex' component={Pokedex} options={{title : 'Pokedex'}}></Stack.Screen>
        <Stack.Screen name='Pokemon' component={Pokedex} options={{title : 'Pokemon'}}></Stack.Screen>
        <Stack.Screen name='Home' component={Home} ></Stack.Screen>

    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})