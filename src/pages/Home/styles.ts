import { StyleSheet, useColorScheme } from "react-native";
import { useTheme } from "react-native-paper";

// const theme = useTheme();
// const isDarkMode = useColorScheme() === 'dark';

export const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#000',
    minHeight: '100%',
  },
  containerStyle: {
    flex: 1,
  },
  mainStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});