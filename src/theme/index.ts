import {DefaultTheme, MD3DarkTheme} from 'react-native-paper';

const customLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    onBackground: '#002855', // Azul escuro (padrão Fatec)
    background: '#ffffff', // Branco (padrão Fatec)
    error: '#d34569',
    onPrimaryContainer: '#a02c2c',
    onPrimaryDisabled: '#b0b0b0',
    onSecondaryContainer: '#ffcc00',
    onSecondaryDisabled: '#b0b0b0',
    disabled: '#d3d3d3',
    success: '#4CAF50',
    warning: '#FFC107',
    primary: '#6200ee', // Adicionando cor primária para o tema claro
    card: '#ffffff', // Cor do card para o tema claro
    text: '#000000', // Cor do texto para o tema claro
    border: '#dddddd', // Cor da borda para o tema claro
    notification: '#f50057', // Cor de notificação para o tema claro
  },
};

const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    onBackground: '#ffffff', // Branco para texto em fundos escuros
    background: '#121212', // Fundo escuro
    error: '#d34569',
    onPrimaryContainer: '#a02c2c',
    onPrimaryDisabled: '#b0b0b0',
    onSecondaryContainer: '#ffcc00',
    onSecondaryDisabled: '#b0b0b0',
    disabled: '#d3d3d3',
    success: '#4CAF50',
    warning: '#FFC107',
    primary: '#bb86fc', // Adicionando cor primária para o tema escuro
    card: '#1f1f1f', // Cor do card para o tema escuro
    text: '#ffffff', // Cor do texto para o tema escuro
    border: '#333333', // Cor da borda para o tema escuro
    notification: '#f50057', // Cor de notificação para o tema escuro
  },
};

export {customLightTheme, customDarkTheme};
