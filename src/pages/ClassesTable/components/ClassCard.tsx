import * as React from 'react';
import {View} from 'react-native';
import {Card, Text, Divider} from 'react-native-paper';
import {useStyles} from './styles';

interface ClassCardProps {
  className: string;
  hour: string;
}

const ClassCard = ({className, hour}: ClassCardProps) => {
  const styles = useStyles();

  return (
    <Card style={styles.cardStyle}>
      <Card.Content>
        <View style={styles.row}>
          {/* Conteúdo do lado esquerdo */}
          <Text style={styles.textStyle}>{className}</Text>

          {/* Divider no centro */}
          <Divider style={styles.dividerStyle} />

          {/* Conteúdo do lado direito */}
          <Text style={styles.textStyle}>{hour}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ClassCard;
