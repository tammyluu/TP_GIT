import { useState } from "react";
import {  Button, FlatList, StyleSheet,Text, TextInput, View } from "react-native";
import TestModal from "./TestModal";

export default function FirstDemo(){
    const [textInput, setTextInput]= useState('');
    const [modalVisible, setModalVisible] = useState(false);

    function RecupInput(enterText){
        setTextInput(enterText);
        console.log(textInput);
    }
    function MessageControl(){
        console.log("click on me!");
        setModalVisible(true);
    }
    function closeModal(){
        console.log("close modal");
        setModalVisible(false);
    }
    const tab =[
        {text:"Toto", id : 1},
        {text:"Tata", id : 2},
        {text:"Titi", id : 3},
    ]


    return (
        <View style ={styles.container}>

            <Text style={[styles.monText,styles.tailleText]}>Mon premier composant React native</Text>
            <TextInput  onChangeText={RecupInput} value={textInput}/>
            <Button  color="green" title="Button" onPress={ MessageControl}/>
            <TestModal visible={modalVisible}closeModal={closeModal}></TestModal>
            <FlatList data={tab} renderItem={(itemData)=> {
                return (
                    <View>
                        <Text style={styles.monText}>{itemData.item.text} {itemData.item.id}</Text>
                    </View>
                )
            }}
            keyExtractor={(item,index)=> {
                return index
            }}
            />
        </View>
    )


}
//mauvaise practique
/* const container = {
    backgroundColor : "red",
    flex : 1,
} */

// bonne practique
const styles = StyleSheet.create({
    container: {
        backgroundColor:"red",
        flex : 1,
        padding :20
    },
    monText :{
        margin: 8,
        color : "white",
    },
    tailleText : {
        fontSize:32
    },
   
});