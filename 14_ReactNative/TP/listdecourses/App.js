import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import AddDisplay from './screens/AddDisplay'
import DetailList from './screens/DetailList'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack =createNativeStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
        <Stack.Navigator initialRouteName={Home}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='AddDisplay' component={AddDisplay} options={{title: "Add courses"}}/>
            <Stack.Screen name='DetailList' component={DetailList} options={{title: "Detail"}}/>
        </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})