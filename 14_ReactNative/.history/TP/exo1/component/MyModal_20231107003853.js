import { useState } from "react";
import { Button, Modal, Text, View, Image } from "react-native";


export default function MyModal(props){
    const {addItemsHandler}= props;
    const {closeModal}= props;
    const[textInput, setTextInput] = useState('');

    f
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