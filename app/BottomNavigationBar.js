import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './Login';
import ProductList from './ProductList';
import Cart from './Cart';
import HomeScreen from './HOME/HomeScreen';
import MyProfile from './PROFILE/MyProfile';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#a6a6a6',
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#f2f2f2',
          height: 60,
          width: 100,
        },
        labelStyle: {
            fontSize: 12,
            marginBottom: 5,
        },
        tabBarStyle: {
            with: '100%',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductList}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={24} />
          ),
        }}
      />

<Tab.Screen
        name="Profile"
        component={MyProfile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
