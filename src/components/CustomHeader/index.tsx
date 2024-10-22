import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemeSwitcher from '../Switch';
import {useStyles} from './styles';
import {useTheme} from '../../context/ThemeContext';

const CustomHeader: React.FC = () => {
  const navigation = useNavigation();
  const styles = useStyles();
  const {colors} = useTheme();
  const route = useRoute();

  return (
    <View style={styles.headerContainer}>
      {route.name != 'SignIn' ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrow-back" size={20} color={colors.buttonText} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity></TouchableOpacity>
      )}
      <ThemeSwitcher />
    </View>
  );
};

export default CustomHeader;
