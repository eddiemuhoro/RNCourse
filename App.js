
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Login from './app/REGISTRATION/Login';
import Dashboard from './app/Dashboard';
import ProductList from './app/PRODUCTS/ProductList';
import ProductDetailsScreen from './app/PRODUCTS/ProductDetailsScreen';
import BottomNavigation from './app/NAVIGATION/BottomNavigationBar';
import RelatedProducts from './app/PRODUCTS/RelatedProducts';
import { View } from 'react-native';
import Home from './goals/Home';


export default function App() {
 
  return (
    <View>
      <Home />
    </View>

  );
}
