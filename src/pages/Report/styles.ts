import {StyleSheet} from 'react-native';
import {useTheme} from '../../context/ThemeContext';

export const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    backgroundStyle: {
      flex: 1,
      marginTop: 30,
    },
    mainContainerStyle: {
      marginTop: 16,
      marginBottom: 48,
    },
    selectedStyle: {
      width: '80%',
      marginHorizontal: 'auto',
    },
  });
};
