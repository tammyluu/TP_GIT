import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from "react";

export default function Home({navigation, route}) {

    const [articles, setArticles] = useState([
        {
            "itemName" : "Rice",
            "price": 1.5,
            "quantity": 2
        }
    ])


    function add (newItem) {
    setArticles(prevarticle=> [...prevarticle,newItem])
    }
  return (
    <View style={styles.container}>
    <Button style={styles.myButton}  onPress={() => navigation.navigate('AddDisplay', { add })} title="Add an article +"></Button>

   
    <FlatList data={articles} renderItem={(article) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('DetailList', { itemName: article.item.itemName, price: article.item.price, quantity: article.item.quantity})} >
                <Text style={styles.section}>{article.item.itemName}  </Text>
            </TouchableOpacity>
        )
    }} keyExtractor={(item, index) => {
        return index
    }} />
 
    
</View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    section: {
        padding: 20,
        marginTop: 20,
        backgroundColor: "green",
        color: "white",
        borderRadius: 10,
    }
})