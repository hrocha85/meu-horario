import {StyleSheet} from 'react-native';
import {useTheme} from '../../../context/ThemeContext';

export const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    cardStyle: {
      margin: 16,
      padding: 16,
      backgroundColor: colors.cardBackground, // Usando cor do tema
    },
    row: {
      flexDirection: 'row', // Organiza em linha
      alignItems: 'center', // Alinha verticalmente no centro
      justifyContent: 'space-between', // Espaço entre os itens
    },
    textStyle: {
      flex: 1, // Divide o espaço igualmente
      textAlign: 'center', // Centraliza o texto
      color: colors.textPrimary, // Cor do texto de acordo com o tema
    },
    dividerStyle: {
      width: 1, // Define a largura do Divider
      height: '100%', // O Divider ocupa toda a altura da linha
      backgroundColor: colors.divider, // Usando cor do Divider do tema
      marginHorizontal: 16, // Espaçamento entre os textos e o Divider
    },
  });
};
