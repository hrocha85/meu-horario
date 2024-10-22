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
    mainContainerStyle: {
      minHeight: '75%',
      marginTop: 16,
    },
    selectedStyle: {
      width: '80%',
      marginHorizontal: 'auto',
    },
  });
};
