import React from 'react';
import {View, Text} from 'react-native';
import {Switch} from 'react-native-paper';
import {useTheme} from '../../context/ThemeContext';

const ThemeSwitcher = () => {
  const {isDarkTheme, colors, toggleTheme} = useTheme();

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
      <Text style={{color: colors.buttonText}}>
        {isDarkTheme ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Switch value={isDarkTheme} onValueChange={toggleTheme} color="#fafafa" />
    </View>
  );
};

export default ThemeSwitcher;
