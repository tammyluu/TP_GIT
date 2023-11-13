import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'
import MealDetails from "./MealDetail";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }){
    const navigation = useNavigation();

    const handleSelectMeal = () => {
        navigation.navigate("Meal Detail", {
            mealId: id
        })
    }
    
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }} onPress={handleSelectMeal}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails 
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white'
    }
})