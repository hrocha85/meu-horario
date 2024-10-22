import {StyleSheet} from 'react-native';
import {useTheme} from '../../context/ThemeContext';

export const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    backgroundStyle: {
      flex: 1,
      backgroundColor: colors.background,
      marginTop: 30,
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
      width: '80%',
      marginHorizontal: 'auto',
    },
    inputStyle: {
      width: '100%',
      borderRadius: 8,
      color: colors.text,
    },
  });
};
