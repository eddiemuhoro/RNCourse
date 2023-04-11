
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './app/Login';
import Dashboard from './app/Dashboard';
import ProductList from './app/ProductList';
import ProductDetailsScreen from './app/ProductDetailsScreen';
import BottomNavigation from './app/BottomNavigationBar';

const Stack = createStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Dashboard" component={Dashboard} />
         <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        
      </Stack.Navigator>
      

  </NavigationContainer>
  );
}
