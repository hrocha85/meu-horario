import React from 'react';

import {View} from 'react-native';
import {Button, ButtonProps, useTheme} from 'react-native-paper';
import {styles} from './styles';

interface BottomButtonProps extends ButtonProps {
  children: React.ReactNode;
  isAbsolute?: boolean;
}

const BottomButton: React.FC<BottomButtonProps> = (props: any) => {
  const {colors} = useTheme();
  const {children, isAbsolute, ...rest} = props;

  return (
    <View
      style={[
        styles.buttonContainer,
        isAbsolute ? styles.withAbsolute : styles.withoutAbsolute,
      ]}>
      <Button
        mode="contained"
        labelStyle={{fontSize: 20, color: colors.buttonText}}
        style={{
          backgroundColor: colors.primary,
          borderRadius: 8,
          marginBottom: 24,
          padding: 8,
        }}
        {...rest}>
        {children}
      </Button>
    </View>
  );
};

export default BottomButton;
