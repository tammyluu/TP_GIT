import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Home from './screens/Home'
import Category from './screens/Category';
import Detail from './screens/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

// npm install @react-navigation/native
// expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/stack
// expo install react-native-gesture-handler

const Stack = createNativeStackNavigator()

export default function App() {
  return (

     <NavigationContainer>
     <Stack.Navigator initialRouteName='Home' screenOption ={{ headerStyle : { backgroundColor: '#351401' },headerTintColor: 'white',contentStyle: { backgroundColor: '#3f2f25' }}}>
        <Stack.Screen name='Category' component={Category} options={{title :"All categories"}}></Stack.Screen>
        <Stack.Screen name='Detail' component={Detail} options={{title :"Meal Detail"}}></Stack.Screen>
        <Stack.Screen name='Home' component={Detail} options={{title :"Your Meals"}}></Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer>

  );
}

const styles = StyleSheet.create({});
