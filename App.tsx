import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {adaptNavigationTheme, PaperProvider} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {customLightTheme, customDarkTheme} from './src/theme/index';
import SignInScreen from './src/pages/SignIn/index';
import HomeScreen from './src/pages/Home/index';
import {ThemeProvider, useTheme} from './src/context/ThemeContext';

const Stack = createNativeStackNavigator();
const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: customLightTheme,
  reactNavigationDark: customDarkTheme,
});

const Routes = () => {
  return (
    <ThemeProvider>
      <InnerRoutes />
    </ThemeProvider>
  );
};

const InnerRoutes = () => {
  const {isDarkTheme} = useTheme();

  return (
    <PaperProvider
      settings={{
        icon: props => <AwesomeIcon {...props} />,
      }}
      theme={isDarkTheme ? customDarkTheme : customLightTheme}>
      <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Routes;
