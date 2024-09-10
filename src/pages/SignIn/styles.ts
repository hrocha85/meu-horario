import { StyleSheet, useColorScheme } from "react-native";
import { useTheme } from "react-native-paper";

// const theme = useTheme();
// const isDarkMode = useColorScheme() === 'dark';

export const createStyles = (theme: any) => StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    // backgroundColor: isDarkMode ? theme.colors.onBackground : theme.colors.background,
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
    color: 'white',
  },
});