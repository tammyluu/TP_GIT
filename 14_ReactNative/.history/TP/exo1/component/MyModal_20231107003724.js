import { Button, Modal, Text, View, Image } from "react-native";


export default function MyModal(props){
    const {addItemsHandler, removeItemsHandler}
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