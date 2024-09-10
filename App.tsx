import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import SignInScreen from './src/pages/SignIn/index';
import HomeScreen from './src/pages/Home/index';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    onBackground: '#1b1b1d',
    background: '#fefefe',
    error: '#d34569',
    onPrimaryContainer: '#a02c2c',
    onPrimaryDisabled: '#b0b0b0',
    onSecondaryContainer: '#11bef4',
    onSecondaryDisabled: '#b0b0b0',
    disabled: '#d3d3d3',
  },
};

const Routes = () => {
  return (
    <NavigationContainer>
      <PaperProvider 
        settings={{
          icon: props => <AwesomeIcon {...props} />,
        }}
        theme={theme}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default Routes;