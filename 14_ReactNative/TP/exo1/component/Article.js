import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Article(props) {


   function  messageId(){
    console.log(props.item.id);
    props.deleteArticle(props.item.id)
   }

  return (
    <Pressable onPress={ messageId}>
      <View style={props.isRed? styles.articleItem2 : styles.articleItem}>
      <Text style={props.isRed? styles.articleText2 : styles.articleItem}>{props.item.text}</Text>
      
    </View>
      </Pressable>
    
  )
}

const styles = StyleSheet.create({
  articleItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  articleText2: {
    color: "white",
  },
  articleItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'red',
  },
  articleText2: {
    color: "yellow",
  }

})