import { useState } from "react";
import { Button, Modal, Text, View, Image } from "react-native";


export default function MyModal(props){
    const {addItemHandler}= props;
    const {closeModal}= props;
    const[textInput, setTextInput] = useState('');

    function recupInput(enterText){
        setTextInput(enterText)
        console.log(textInput)
    }
    const addNewItemHandler =()=>{
        console.log("add Item");
        const newArticle = {text: textInput, id: Date.now()};
        addItemHandler = new
    }
    return (
        <Modal visible={props.visible}>
            <View>
            <Image
            
            />
                <Button title="close Modal" onPress={props.closeModal}/>
            </View>
        </Modal>
    )
}