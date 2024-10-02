import {StyleSheet} from 'react-native';
import {useTheme} from '../../context/ThemeContext';

export const useStyles = () => {
  const {isDarkTheme} = useTheme(); // Acesse o tema atual
  const colors = isDarkTheme
    ? {
        background: '#121212', // Cor de fundo do tema escuro
        text: '#ffffff', // Cor do texto no tema escuro
      }
    : {
        background: '#ffffff', // Cor de fundo do tema claro
        text: '#000000', // Cor do texto no tema claro
      };

  return StyleSheet.create({
    backgroundStyle: {
      flex: 1,
      backgroundColor: colors.background,
    },
    containerStyle: {
      flex: 1,
    },
    welcomeStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 24,
      marginBottom: 24,
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
