import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importar suas telas
import HomeScreen from '../pages/SignIn';
// import DetailsScreen from './screens/DetailsScreen';
// import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
