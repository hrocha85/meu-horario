import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeSwitcher from '../Switch';
import {useStyles} from './styles';
import {useTheme} from '../../context/ThemeContext';
import {Text} from 'react-native-paper';

const CustomHeader: React.FC = () => {
  const navigation = useNavigation();
  const styles = useStyles();
  const {colors} = useTheme();
  const route = useRoute();

  return (
    <View style={styles.headerContainer}>
      {route.name != 'SignIn' &&
      route.name != 'CourseSelection' &&
      route.name != 'ClassNow' ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrow-left" size={20} color={colors.buttonText} />
        </TouchableOpacity>
      ) : (
        <View style={styles.welcome}>
          <Icon name="clock-fast" size={28} color={colors.buttonText} />
          <Text style={{fontSize: 24}}>Meu horário</Text>
        </View>
      )}
      {/* <ThemeSwitcher /> */}
    </View>
  );
};

export default CustomHeader;
