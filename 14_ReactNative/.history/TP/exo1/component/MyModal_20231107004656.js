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
        const newItem = {text: textInput, id: Date.now()};
        addItemHandler(newItem);
        setTextInput("")
        closeModal()
    }
    return (
        <Modal visible={props.visible}>
            <View>
            <Image
                 width={200}
                 height={200}
                 source={{
                     uri: "https://t4.ftcdn.net/jpg/01/33/43/31/360_F_133433110_zgatj8cIiWvu5LuIsFd1Y1XED7vnptOe.jpg"}}
            />
             <TextInput style={styles.input} onChangeText={recupInput} value={textInput}></TextInput>
             <View style={styles.containerButton}>
        <Button style={styles.addButton} title="Ajouter article" onPress={addItemToBasket}></Button>
        <TouchableOpacity style={styles.cancelButton} >
            <Text style={styles.buttonText}>ANNULER</Text>
        
        </TouchableOpacity>
        
        </View>
            </View>
        </Modal>
    )
}