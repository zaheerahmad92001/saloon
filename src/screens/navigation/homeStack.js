// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator ,CardStyleInterpolators } from '@react-navigation/native-stack';
import HomeScreen from '../homeScreen/home/home';


const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator 
    initialRouteName='Home'
    screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
export default HomeStack;