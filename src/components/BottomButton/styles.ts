import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  withAbsolute: {
    position: 'absolute',
    bottom: 0,
  },
  withoutAbsolute: {
    position: 'relative',
  },
});
