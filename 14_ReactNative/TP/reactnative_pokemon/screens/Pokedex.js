import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from './Pokemonslice';
import { pokemonColors } from "../store/action";
import PokemonCard from "../components/PokemonCard"
export default function Pokedex({ navigation }) {

    const pokemons = useSelector(state => state.pokemons.pokemons)
    const dispatch = useDispatch()
    const loading = useSelector(state => state.pokemons.loading)
    const next = useSelector(state => state.pokemons.next)

  /*   useEffect(async () => {
        await dispatch(fetchPokemons(next))
        return
    }, [])
 */
    const pokemonBgColor = (type)=>{
      return pokemonColors [type] || pokemonColors.default;
    }
   

    useEffect(() => {
        dispatch(fetchPokemons(next))
        console.log("pokemon List", pokemons);
       
    },[dispatch])

    const navigateToPokemonDetail = (pokemonName) => {
      // Naviguer vers la page de détails du Pokémon en utilisant le nom du Pokémon
      navigation.navigate('Details', { pokemonName });
    };

    return (
        <SafeAreaView  >
                <FlatList
                    data={pokemons}
                    numColumns={2}
                    renderItem={(pokemon) => (

                        <TouchableOpacity style={[styles.card, { backgroundColor: pokemonBgColor(pokemon.item.detailsData.types[1]?.type?.name) }]}
                        onPress={() => navigateToPokemonDetail(pokemon.item.mainData.name)}
                          
                        >
                            <Text style={styles.cardTypeText}>{pokemon.item.mainData.name}</Text>
                            <FlatList
                                data={pokemon.item.detailsData.types}
                                renderItem={({ item }) => (
                                    <View>
                                        <Text >{item.type.name}</Text>
                                    </View>
                                )}
                                keyExtractor={(item) => item.type.name}
                            />
                            <Image
                                style={styles.image}
                                source={{
                                    uri: pokemon.item.detailsData.sprites["front_default"]
                                }}
                            />



                        </TouchableOpacity>



                    )}
                    keyExtractor={(item) => item.mainData.name}
                />


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
      flex : 1,
      marginTop: 20,
      borderRadius: 20,
      alignItems: 'flex-start',
      justifyContent: 'center',
      elevation: 4,
      margin: 10,
      width: 180,
      height: 140,
      
    },
   /*  column: {
        flexDirection: 'column',
    },  */
    image: {
        position: "absolute",
        alignItems: 'flex-end',
        bottom: 2,
        right: 2,
        width: 120,
        height: 120,
    },
    cardTypeText: {
      color: "black",
      fontWeight:'bold',
      paddingTop: 5,
      paddingRight: 10,
      paddingBottom: 5,
      paddingLeft: 20,
      opacity: 1
  },
    
})