import {StyleSheet} from 'react-native';

export const useStyle = (width: number) =>
  StyleSheet.create({
    menuContent: {
      marginTop: 54,
      minWidth: width,
      maxHeight: 200,
    },
    scrollView: {
      maxHeight: 200,
    },
  });
