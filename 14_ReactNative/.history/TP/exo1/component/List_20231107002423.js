import { useState } from "react";
import {  StyleSheet,View, Text, TextInput, Button } from "react-native";
import MyModal from "./MyModal";
export default function List(){
   
    const [modal, setModal] = useState('false');
    const [items, setItems] = useState([]);

    
    
    function closeModal() {
        console.log("");
        setModal(false);
    }
     
     function addItem  () {
        setModal()
       /* if(newtask) {
        if (editIndex!==-1 ){
            // add existing task
            const updateTasks = [...tasks];
            updateTasks[editIndex] = task;
            setTasks(updateTasks);
            setEditIndex(-1);
            }else{
                // add new task
                setTasks([...tasks,task]);
            }
            setNewTask(''); */
       }
         
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