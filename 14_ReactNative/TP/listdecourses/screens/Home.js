import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from "react";

export default function Home({navigation, route}) {

    const [articles, setArticles] = useState([
        {
            "name" : "Rice",
            "price": 1.5,
            "quantity": 2
        },
        {
            "name" : "Noodle",
            "price": 1.8,
            "quantity": 1
        }
    ])


    function add (newItem) {
    setArticles(preItem=> [...preItem,newItem])
    setArticles('')
    }
  return (
    <View style={styles.container}>
    
        <Text style={styles.title}>My List</Text>
        <FlatList data={articles} renderItem={(article) => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('DetailList', { name: article.item.name, price: article.item.price, quantity: article.item.quantity})} >
                    <Text style={styles.section}>{article.item.name}  </Text>
                </TouchableOpacity>
            )
        }} keyExtractor={(item, index) => {
            return index
        }} />
    
        <Button style={styles.buttonAdd}  onPress={() => navigation.navigate('AddDisplay', { add })} title="Add your article"></Button>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
       
    },
    title:{
        fontSize :24,
        fontWeight : 'bold',
        color : "black",
       
    },
    section: {
        padding: 20,
        margin: 20,
        backgroundColor: "green",
        color: "white",
        borderRadius: 10,
    },
    
})