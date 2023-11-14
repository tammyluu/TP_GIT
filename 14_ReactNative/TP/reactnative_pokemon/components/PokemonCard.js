import React from "react";
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { pokemonColors } from "../store/action"

export default function PokemonCard({pokemon}) {
    
    const navigation = useNavigation();

    /* const pokemonColor = pokemonColors[pokemon.types.type];*/
    const bgStyles = { backgroundColor: pokemonColors, ...bgStyles };
   

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Details", pokemon)}
        >
            <View style={styles.card}>
                <View style={styles.cardSpacing}>
                    <View style={bgStyles}>
                        <Image style={styles.cardImagePokemon}
                            source={{ uri: pokemon.imgUrl }}
                        />
                        <Text style={styles.cardName}>{pokemon.name}</Text>
                        {
                            pokemon.types.map((type, idx) => {
                                return (
                                    <View key={idx} style={styles.cardTypeContainer}>
                                        <Text style={styles.cardTypeText}>{type.type.name}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    )
}
const styles = StyleSheet.create({
  card: {
        flex: 1,
        
        
        
       
    },
     cardImagePokemon: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
   },
     cardSpacing: {
        flex: 1,
        padding: 5,
    },
     cardName: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        paddingTop: 10,
    },
    cardTypeContainer:{
        backgroundColor: "#fff", 
        opacity:.2, 
        borderRadius: 10, 
        alignSelf: "baseline", 
        margin: 1
    },
     cardTypeText: {
        color: "black",
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 20,
        opacity: 1
    },
})