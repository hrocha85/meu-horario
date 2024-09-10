import { View } from "react-native";
import { Button, ButtonProps, useTheme } from 'react-native-paper';
import { styles } from "./styles";

interface ButtonPrimaryProps extends ButtonProps {
  children: React.ReactNode;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = (props) => {
  const theme = useTheme();

  return (
    <View style={styles.buttonContainer}>
      <Button
        mode='contained'
        labelStyle={{ fontSize: 20 }}
        style={{ backgroundColor: theme.colors.onPrimaryContainer, borderRadius: 8, marginBottom: 24, padding: 8 }}
        {...props}
      >
        {props.children}
      </Button>
    </View>
  );
}

export default ButtonPrimary;