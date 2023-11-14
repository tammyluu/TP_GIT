import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";


export default function About({item}) {
   
    const [abilities, setAbilities] = useState([])

    useEffect(() => {
        function getAbility() {
            let arr = []
            for (let i = 0; i < item.abilities.length; i++) {
                arr.push(item.abilities[i].ability.name)
            }
            return setAbilities(arr)
        }

        getAbility()
    }, [])

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Species</Text>
                <Text style={styles.textDisplay}>{item.species}</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Height</Text>
                <Text style={styles.textDisplay}>{item.height} ''</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Weight</Text>
                <Text style={styles.textDisplay}>{item.weight} lbs</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Abilities</Text>
                <Text style={styles.textDisplay}>{abilities.join(', ')}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container :{
    flexDirection: "row",
     marginBottom: 20
  },
  title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        marginLeft: 30,
        color: "grey",
        opacity: .7,
        width: 120,
    },
     textDisplay: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        color: "grey",
    },

})