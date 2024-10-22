import {DefaultTheme, MD3DarkTheme} from 'react-native-paper';

const customLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    onBackground: '#003366', // Azul Fatec para textos secundários
    background: '#F9FAFB', // Cinza claro para fundo
    error: '#CC0033', // Vermelho Fatec para erros
    onPrimaryContainer: '#E0E0E0', // Cinza claro Fatec para contêineres primários
    onPrimaryDisabled: '#BDBDBD', // Cinza claro para botões desativados
    onSecondaryContainer: '#FFD54F', // Amarelo suave
    onSecondaryDisabled: '#E0E0E0', // Cinza claro para desativados
    disabled: '#E0E0E0', // Cinza claro Fatec
    success: '#66BB6A', // Verde para sucesso
    warning: '#FFB300', // Amarelo suave para alertas
    primary: '#CC0033', // Vermelho Fatec como cor primária
    card: '#FFFFFF', // Manter branco para cartões
    text: '#003366', // Azul Fatec para texto secundário
    border: '#CFD8DC', // Cinza claro para bordas
    notification: '#CC0033', // Vermelho Fatec para notificações
    buttonText: '#E0E0E0', // Vermelho Fatec para texto de botões
  },
};

const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    onBackground: '#E0E0E0', // Cinza claro Fatec para melhor leitura
    background: '#181818', // Preto suave para fundo
    error: '#EF9A9A', // Vermelho claro para erros
    onPrimaryContainer: '#666666', // Cinza escuro Fatec para contêineres primários
    onPrimaryDisabled: '#757575', // Cinza suave para desativados
    onSecondaryContainer: '#FFCA28', // Amarelo menos saturado
    onSecondaryDisabled: '#9E9E9E', // Cinza suave para desativados
    disabled: '#BDBDBD', // Ajuste de cinza para elementos desativados
    success: '#81C784', // Verde suave para sucesso
    warning: '#FFB74D', // Laranja suave para alertas
    primary: '#CC0033', // Vermelho Fatec como cor primária no tema escuro
    card: '#1E1E1E', // Cinza escuro para cartões
    text: '#E0E0E0', // Cinza claro para texto
    border: '#424242', // Cinza escuro para bordas
    notification: '#CC0033', // Vermelho Fatec para notificações
    buttonText: '#E0E0E0', // Vermelho Fatec para texto de botões
  },
};

export {customLightTheme, customDarkTheme};
