
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './app/Login';
import Dashboard from './app/Dashboard';
import ProductList from './app/ProductList';
import ProductDetailsScreen from './app/ProductDetailsScreen';
import BottomNavigation from './app/BottomNavigationBar';
import RelatedProducts from './app/RelatedProducts';
import { View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
 
  return (
   

  
    <NavigationContainer
    //set vertical scroll to true
    verticalScrollEnabled={true}
    >
      <Stack.Navigator >
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Dashboard"  options={{ headerShown: false }} component={Dashboard} />
         <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="RelatedProducts" component={RelatedProducts} />
      </Stack.Navigator>
   

  </NavigationContainer>

  );
}
