import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {adaptNavigationTheme, PaperProvider} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {customLightTheme, customDarkTheme} from './src/theme/index';
import {ThemeProvider, useTheme} from './src/context/ThemeContext';
import {BackHandler} from 'react-native';

import SignInScreen from './src/pages/SignIn/index';
import CourseSelectionScreen from './src/pages/CourseSelection/index';
import ClassNowScreen from './src/pages/ClassNow/index';
import ClassesTableScreen from './src/pages/ClassesTable/index';
import ReportScreen from './src/pages/Report/index';
import CustomHeader from './src/components/CustomHeader';

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
        <Stack.Navigator
          screenOptions={{headerShown: true, header: () => <CustomHeader />}}>
          {/* <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen
            name="CourseSelection"
            component={CourseSelectionScreen}
          /> */}
          <Stack.Screen name="ClassNow" component={ClassNowScreen} />
          <Stack.Screen name="ClassesTable" component={ClassesTableScreen} />
          <Stack.Screen name="Report" component={ReportScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Routes;
