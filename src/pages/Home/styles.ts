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
      alignItems: 'flex-end',
    },
    mainStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80%',
    },
    formStyle: {
      width: '80%',
    },
  });
};
