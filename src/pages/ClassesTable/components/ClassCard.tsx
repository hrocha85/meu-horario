import * as React from 'react';
import {View} from 'react-native';
import {Card, Text, Divider, Button} from 'react-native-paper';
import {useStyles} from './styles';
import {useTheme} from '../../../context/ThemeContext';
import {useNavigation} from '@react-navigation/native';

interface ClassCardProps {
  hour: string;
  className: string;
  classroom: string;
}

const ClassCard = ({className, hour, classroom}: ClassCardProps) => {
  const styles = useStyles();
  const {colors} = useTheme();
  const navigation = useNavigation<any>();

  return (
    <Card style={styles.cardStyle}>
      <Card.Content>
        <View style={styles.cardTop}>
          <Text variant="headlineLarge" style={{marginRight: 4}}>
            {hour}
          </Text>
          <Button
            mode="contained"
            textColor={colors.background}
            style={{
              backgroundColor: colors.error,
              borderRadius: 8,
            }}
            onPress={() => {
              navigation.navigate('Report', {
                className: className,
                hour: hour,
                classroom: classroom,
              });
            }}>
            Reportar erro
          </Button>
        </View>
        <Divider style={styles.dividerStyle} />
        <View style={styles.row}>
          <View style={styles.column}>
            <Text variant="titleMedium">Aula</Text>
            <Text style={styles.textStyle}>{className}</Text>
          </View>

          <View style={styles.column}>
            <Text variant="titleMedium">Sala</Text>
            <Text style={styles.textStyle}>{classroom}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ClassCard;
