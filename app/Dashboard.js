import React from 'react';
import { View, Text } from 'react-native';
import BottomNavigation from './NAVIGATION/BottomNavigationBar';

const DashboardScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  width:'100%' }}>
      <BottomNavigation style={{width:'100%'}}/>
    </View>
  );
};

export default DashboardScreen;