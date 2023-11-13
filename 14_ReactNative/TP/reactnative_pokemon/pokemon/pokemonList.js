import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PokemonList({data}) {
  return (
    data.map((dataPoke) =>(
        <View style={styles.listPokemon} key={dataPoke}>
            <Text style={styles.itemText}>{dataPoke}</Text>
        </View>
    ))
    
  )
}

const styles = StyleSheet.create({})