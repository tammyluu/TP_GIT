import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/data';
import CategoryGridTile from '../components/CaregoryGridTile';

function Home({ navigation }){
    function diplayCategory(itemData){
        const handleChooseMeal = () => {
            navigation.navigate("Meal Overview", {
                categoryId: itemData.item.id,
            });
        }
    
        return <CategoryGridTile onClick={handleChooseMeal} title={itemData.item.title} color={itemData.item.color}/>
    }

    return (
        //Flat list make a 'map' to an array
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={diplayCategory}
            numColumns={2}
        />
    )
}

export default Home