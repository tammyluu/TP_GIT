import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ModalInput from './component/ModalInput'
import Article from './component/Article'

export default function App() {
    const [modalIsVisible,setModalIsVisible] = useState(false)
    const [articles,setArticles] = useState([])

    function addArticle(article){
        setArticles(articlesCurrent => [
            ...articlesCurrent,
            { text : article , id : Math.random().toString()}
        ])
        setModalIsVisible(false) //  closeModale()
       
    }

    function closeModale(){
        setModalIsVisible(false)
    }

    function openModale(){
        setModalIsVisible(true)
    }
    function deleteArticle (id) {
      const newArticle = articles.filter(article => article.id !== id);
      setArticles(newArticle);
      console.log("article deleted");
    }
  return (
    <View style={styles.container}>
      <Button title='Add Article' onPress={openModale} />
      <ModalInput visible={modalIsVisible} closeModale={closeModale} addArticle={addArticle}></ModalInput>
      <FlatList data={articles} renderItem={(itemData) => {
        return(
            <Article item={itemData.item} ></Article>
        )
      }
      } keyExtractor={(item,index)=> {
        return index // item.id
      }}
      ></FlatList>
      <Button title='Remove' onPress={deleteArticle}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop :20,
        paddingHorizontal : 16,
    }
})