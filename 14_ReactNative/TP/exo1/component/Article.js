import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Article(props) {
   const {deleteArticle}= props

  return (
    <View>
      <Pressable onPress={deleteArticle}>
      <Text>{props.item.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    articleItem :  {
        margin : 8,
    
    }
})