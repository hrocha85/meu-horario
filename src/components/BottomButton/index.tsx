import React from 'react';

import {View} from 'react-native';
import {Button, ButtonProps, useTheme} from 'react-native-paper';
import {styles} from './styles';

interface BottomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const BottomButton: React.FC<BottomButtonProps> = (props: any) => {
  const theme = useTheme();

  return (
    <View style={styles.buttonContainer}>
      <Button
        mode="contained"
        labelStyle={{fontSize: 20, color: theme.colors.background}}
        style={{
          backgroundColor: theme.colors.onPrimaryContainer,
          color: theme.colors.onBackground,
          borderRadius: 8,
          marginBottom: 24,
          padding: 8,
        }}
        {...props}>
        {props.children}
      </Button>
    </View>
  );
};

export default BottomButton;
