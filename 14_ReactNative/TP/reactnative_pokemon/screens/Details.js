import {Text, View, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useDispatch } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { pokemonColors } from "../store/action";
import {  fetchPokemonDetail } from "./Pokemonslice";


import About from "../components/about"

export default function Details({ route}) {
  const {item} = route.params
  const [menu, setMenu] =useState ("About")
  const dispatch = useDispatch();
  const { pokemonDetail, loading } = useSelector((state) => state.pokemonDetail.pokemonDetail);
  
  useEffect(() => {
    dispatch(fetchPokemonDetail(pokemonName));
  }, [dispatch, pokemonName]);
  
  const listMenuInfo = [
    {
      option : "About"
    },
    {
      option : "evolution"
    }
  ]
   const setMenuOption = menu => {
        return setMenu(menu)
    }

    const btnActive = {
        color: pokemonColors,
    }

  return (
     <View style={styles.bgStyles}>
            <Text style={styles.titleDetail}>{item.name}</Text>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap", marginLeft: 20, marginRight: 30 }}>
                    {item.types ?
                        item.types.map((type, idx) => {
                            return (
                                <View key={idx} style={{ backgroundColor: "#fff", opacity: .2, borderRadius: 15, alignSelf: "baseline", margin: 5 }}>
                                    <Text style={{ color: "black", padding: 5, opacity: 1, fontWeight: "bold", fontSize: 20, marginLeft: 10, marginRight: 10 }}>{type.type.name}</Text>
                                </View>
                            )
                        })
                        : <View></View>}

                </View>
                <View style={{ paddingRight: 20 }}>
                    <Text style={{ color: "#fff", opacity: .8, fontWeight: "bold", fontSize: 40, }}>
                        #{`${item.id}`.padStart(3, 0)}
                    </Text>
                </View>
            </View>
            <View style={{
                alignItems: "center",
                elevation: 5,
            }}>
                <Image
                    style={styles.detail__imagePokemon}
                    source={{ uri: item.imgUrl }}
                />
            </View>
            <View style={styles.container__moves}>
                <SafeAreaView style={styles.detail__containerInfo}>
                    <View style={styles.detail__listTab}>
                        {
                            listMenuInfo.map(e => {
                                return (
                                    <TouchableOpacity key={e.option} style={[styles.detail__btnTab, menu === e.option && { borderBottomWidth: 1, borderBottomColor: pokemonColors }]}
                                        onPress={() => setMenuOption(e.option)}
                                    >
                                        <Text style={[styles.detail__textTab, menu === e.option && btnActive]}>{e.option}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <View>
                        <View style={{ paddingBottom: 80 }}>
                            {menu === "About" ?
                                <About item={item}></About> : <View></View>
                            }

                            /* {menu === "Evolution" ?
                                <Evolution item={item}></Evolution> : <View></View>
                            }  */
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: "#f4f4f4",
  },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },  
  titleDetail: {
        fontSize: 50,
        margin: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        color: "#fff"
    },
    detail__imagePokemon: {
        height: 200,
        width: 200,
        position: 'absolute',
        top: 20,
    },
    detail__containerInfo: {
        flex: 1,
        paddingHorizontal: 10,
    },
    container__moves: {
        top: 160,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flex: 1,
        paddingTop: 70,
    },
    detail__listTab: {
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: 20
    },
    detail__btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: "row",
        borderBottomColor: 'gray',
        borderBottomWidth: .5,
        padding: 10,
        justifyContent: "center"
    },
    detail__textTab: {
        fontSize: 25,
        color: "gray",
        fontWeight: "bold"
    },
})

