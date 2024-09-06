import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar suas telas
import HomeScreen from '../pages/Home';
// import DetailsScreen from './screens/DetailsScreen';
// import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (

      <Stack.Navigator initialRouteName="Home">
        {/* Define as rotas do seu app */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Página Inicial' }} 
        />
        {/* <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Detalhes' }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Perfil' }} 
        /> */}
      </Stack.Navigator>
  );
};

export default AppRoutes;
