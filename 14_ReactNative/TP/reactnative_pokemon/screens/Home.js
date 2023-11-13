import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <Text style={styles.myText}>Attrapper les tous, Pokemon !!</Text>
      <View style={styles.myButtons}>
      <Pressable title='Pokedex' style={styles.myButtonLeft} onPress={() => navigation.navigate("Pokedex",{message : "Pokemon List"})}><Text>Pokemons</Text></Pressable>
      <Pressable title='Pokemon' style={styles.myButtonRight} onPress={() => navigation.navigate("Pokemon",{message : "Pokemon detail"})}><Text>Pokedex</Text></Pressable>
      </View>

     
    </View>
  )
}

const styles = StyleSheet.create({
    myText :{
        fontSize : 35,
        fontWeight : 'bold',
    },
    myButtons:{
        flexDirection : 'row',
        justifyContent : 'center',
        margin : 20,
        
    },
    myButtonLeft :{
        height: 50,
        width : 120,
        backgroundColor: "#afeeee",
        borderRadius : 10,
        
        
    },
    myButtonRight :{
        height: 50,
        width : 120,
        backgroundColor: "#87cefa",
        borderRadius : 10
    }

})