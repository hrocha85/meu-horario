import {StyleSheet} from 'react-native';
import {useTheme} from '../../context/ThemeContext';

export const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: colors.primary,
    },
    backButton: {
      padding: 10,
    },
    backButtonText: {
      color: '#fff',
      fontSize: 20,
    },
    title: {
      color: '#fff',
      fontSize: 18,
    },
    themeButton: {
      padding: 10,
    },
    themeButtonText: {
      color: '#fff',
    },
  });
};
