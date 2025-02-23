import * as React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Favorites from '../favoritesScreen/favourites'; 


const Stack = createNativeStackNavigator();

function FavouriteStack() {
  return (
    <Stack.Navigator 
    initialRouteName='favorites'
    screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="favorites" component={Favorites} />

    </Stack.Navigator>
  );
}
export default FavouriteStack;