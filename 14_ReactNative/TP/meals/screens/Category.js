import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MEALS, CATEGORIES } from '../data/data'
import MealDetails from '../components/MealDetail'

function Category({ route, navigation }){
    const id = route.params.categoryId
    
   

    //Checks if the MEAL have the id that was passed by the route
    //Then stores the MEAL at the displayMeals const
    const dislayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(id) >= 0
    }) 

    const renderMealItem = (itemData) => {
        return (
            <MealItem 
                id={itemData.item.id}
                title={itemData.item.title} 
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={dislayMeals} 
                keyExtractor={(item) => item.id} 
                renderItem={renderMealItem} 
            />
        </View>
    )
}

export default Category
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})