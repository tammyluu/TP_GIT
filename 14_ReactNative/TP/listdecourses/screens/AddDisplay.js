import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import { useState } from "react"

export default function AddDisplay({route,navigation}) {

  const add = route.params.add

    const [inputName,setInputName] = useState("")
    const [inputPrice,setInputPrice] = useState("")
    const [inputQuantity,setInputQuantity] = useState("")

    function recupInputName(enterTextName){
        setInputName(enterTextName)
 
    }
    function recupInputPrice( enterTextPrice){
        setInputPrice(enterTextPrice)
       
     
    }
    function recupInputQuantity( enterTextQuantity){
        setInputQuantity(enterTextQuantity)
      
    }
    function addNewItem() {
        const newItem={"name": inputName, "price": inputPrice, "quantity": inputQuantity}
        console.log(newItem)
        add(newItem)
    }

  return (
  
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Title of article" onChangeText={recupInputName} value={inputName}></TextInput>
        <TextInput style={styles.input} placeholder="Price" onChangeText={recupInputPrice} value={inputPrice}></TextInput>
        <TextInput style={styles.input} placeholder="Quantity " onChangeText={recupInputQuantity} value={inputQuantity}></TextInput>
        <View style={styles.containerButton}>
            <Button style={styles.addButton} title="Add an article" onPress={() => {

                navigation.navigate('Home'),addNewItem()
            
            }}></Button>



        </View>

    </View>




  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: '70%',
    },
    input: {
       borderWidth: 1,
       borderColor: "black",
       width: 300,
       height: 50,
       borderRadius: 10,
       marginBottom: 20,
       color: "black",
       backgroundColor: "white"

    },

    addButton: {
        borderRadius: 10,
        fontWeight: "bold"
    }


})