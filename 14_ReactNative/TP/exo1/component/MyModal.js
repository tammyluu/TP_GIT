import { useState } from "react";
import { TextInput,Button, Modal, Text, View, Image , TouchableOpacity, StyleSheet} from "react-native";


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
        <Modal style={styles.container} visible={props.visible}>
            <View>
           
             <TextInput style={styles.input} onChangeText={recupInput} value={textInput}></TextInput>
                <View style={styles.buttonGroup}>
                    <Button style={styles.addButton} title="Add" onPress={addNewItemHandler}></Button>
                    <TouchableOpacity style={styles.cancelButton} >
                    <Text style={styles.buttonText}>Cancel</Text>
            
                    </TouchableOpacity>
            
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
    },
    buttonGroup : {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: '70%', 
    },
    input : {

    },
    addButton: {

    },
    cancelButton: {

    },
    buttonText :{
        
    }
});