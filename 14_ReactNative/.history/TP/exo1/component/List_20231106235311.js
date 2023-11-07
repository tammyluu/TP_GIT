import { useState } from "react";
import {  StyleSheet,View, Text, TextInput, Button } from "react-native";
import MyModal from "./MyModal";
export default function List(){
    const [textInput, setTextInput] = useState('');
    const [modal, setModal] = useState('false');
    const [task, setTask] = 

    function getInput(yourText) {
        setTextInput(yourText);
        console.log(textInput);
    }
    function MyMessage(){
        console.log("click on me!!");
        setModal(true);
    }
    function closeModal() {
        console.log("");
        setModal(false);
    }
     
     function addList  () {
       
         const lists = [];
        const list = new List(setTextInput);
        lists.push(list);
        console.log(list); 
    }    
    return(
        <View style={styles.container}>
            <Text style={styles.myText}>Liste de courses</Text>
            <TextInput  style={styles.myInput} onChangeText={getInput} value={textInput}/>
            <Button  title="Add" onPress = {MyMessage}/>
            <MyModal visible={modal} closeModal={closeModal}></MyModal>

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
         fontSize: 
         alignContent: "center",
         justifyContent: "center",
     },
     myInput:{
        backgroundColor: "grey",
        marginBottom : 15,
        borderRadius : 5,
     }
 })