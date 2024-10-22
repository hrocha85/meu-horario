import {StyleSheet} from 'react-native';
import {useTheme} from '../../../context/ThemeContext';

export const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    cardStyle: {
      margin: 16,
      padding: 16,
      backgroundColor: colors.card,
    },
    cardTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    column: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '50%',
      minHeight: 50,
      paddingHorizontal: 8,
    },
    textStyle: {
      textAlign: 'center',
      color: colors.text,
    },
    dividerStyle: {
      width: '100%',
      backgroundColor: colors.primary,
      marginVertical: 16,
    },
  });
};
