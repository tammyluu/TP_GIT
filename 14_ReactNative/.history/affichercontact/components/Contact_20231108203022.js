import { View, Image, StyleSheet, Button, TextInput, TouchableOpacity, Text } from "react-native"


export default function Contact() {


    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image style={styles.image}
                    width={100}
                    height={100}
                    source={{
                        uri: "https://cdn.buttercms.com/O7wz509NSOOyixCnLn1x"
                    }} />
            </View>
         
               <View
            

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#faebd6",

        padding: 20,
        marginTop: 20,
    },
    container2: {
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        fontSize: 20
    },
    textBold: {
        fontWeight: '900',
        color: 'black'
    },
    image: {

        borderRadius: 100,
        marginBottom: 20
    }
})