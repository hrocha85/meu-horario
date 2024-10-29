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
      height: 50,
      backgroundColor: colors.primary,
      borderBottomColor: colors.buttonText,
      borderBottomWidth: 1,
    },
    backButton: {
      padding: 5,
    },
    welcome: {
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      marginLeft: 8,
    },
  });
};
