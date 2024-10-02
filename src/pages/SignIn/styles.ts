import {StyleSheet} from 'react-native';
import {useTheme} from '../../context/ThemeContext';

export const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    backgroundStyle: {
      flex: 1,
      backgroundColor: colors.background,
    },
    switcherStyle: {
      display: 'flex',
      alignItems: 'flex-end'
    },
    containerStyle: {
      flex: 1,
    },
    welcomeStyle: {
      justifyContent: 'center',
      marginBottom: 24,
      alignItems: 'center',
    },
    formStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: 24,
    },
    inputStyle: {
      width: '100%',
      borderRadius: 8,
      color: colors.text,
    },
  });
};
