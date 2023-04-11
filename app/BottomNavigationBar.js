import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './Login';
import ProductList from './ProductList';

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
          with: 100,
        },
        labelStyle: {
            fontSize: 12,
            marginBottom: 5,
        },
        tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            with: '100%',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ProductList}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
