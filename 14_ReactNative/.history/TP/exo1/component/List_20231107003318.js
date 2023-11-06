import { useState } from "react";
import {  StyleSheet,View, Text, TextInput, Button, FlatList } from "react-native";
import MyModal from "./MyModal";
export default function List(){
   
    const [modal, setModal] = useState('false');
    const [items, setItems] = useState([]);

    
    
    function closeModal() {
        console.log(items);
        setModal(false);
    }
     
     function addItem  () {
        setModal(true);         
    }  
    function addItemHandler(newItem){
        setItems([...items, newItem]);
    }  
    return(
        <View style={styles.container}>
            <Text style={styles.myText}>Liste de courses</Text>
            <MyModal visible={modal} closeModal={closeModal} addItem={addItemHandler}></MyModal>
            <Button  title="Add" onPress = {MyMessage}/>
           <FlatList data={items} render
               <View>
                    <Text style={styles.myText}></Text>
               </View>
           />

        </View>
    )
}

const styles = StyleSheet.create({
     container: {
         flex : 1,
        padding: 20,
        backgroundColor : '#E8EAED',
     },
     myText: {
         margin: 8,
         color: "black",
         fontSize: 30,
         alignContent: "center",
         justifyContent: "center",
     },
     myInput:{
        backgroundColor: "grey",
        marginBottom : 15,
        borderRadius : 5,
     }
 })