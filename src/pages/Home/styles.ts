import {StyleSheet, useColorScheme} from 'react-native';
import {useTheme} from 'react-native-paper';

// const theme = useTheme();
// const isDarkMode = useColorScheme() === 'dark';

export const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#000',
  },
  mainStyle: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 24,
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  formStyle: {
    width: '80%',
  },
});
