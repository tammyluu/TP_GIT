import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function DetailList({route}) {
    const name = route.params.name
    const price = route.params.price
    const quantity = route.params.quantity

  return (
    <View>
      <Text>Details article</Text>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{quantity}</Text>
      <Button style={styles.cancelButton}  title="Remove an article" onPress={()=> {}}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    cancelButton: {
        backgroundColor: "red", 
        padding: 10,
        borderRadius: 5,
    }
})