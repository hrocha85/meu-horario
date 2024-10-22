import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useStyles} from './styles';
import BottomButton from '../../components/BottomButton';
import {Text, useTheme} from 'react-native-paper';
import {format} from 'date-fns';
import {formatDate} from '../../utils';
import ClassCard from './components/ClassCard';
import {useNavigation} from '@react-navigation/native';

const classData = [
  {
    className: 'Algoritmos e Lógica de Programação',
    hour: '08:00',
    classroom: '1B',
  },
  {className: 'Administração de Empresas', hour: '10:00', classroom: '2C'},
  {
    className: 'Gestão de Operações Portuárias',
    hour: '12:00',
    classroom: '2B',
  },
  {className: 'Logística Integrada', hour: '14:00', classroom: '1A'},
  {className: 'Desenvolvimento Web', hour: '16:00', classroom: '2A'},
];

const ClassesTable = (): React.JSX.Element => {
  const styles = useStyles();
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.titleStyle}>
        <Text variant="displaySmall">Horário de hoje</Text>
        <Text
          variant="headlineMedium"
          style={{marginTop: 8, textTransform: 'capitalize'}}>
          {format(new Date(), 'dd/MM/yyyy')} - {formatDate(new Date(), 'EEEE')}
        </Text>
      </View>

      <ScrollView style={{maxHeight: '90%', marginTop: 28}}>
        {classData.map((item, index) => (
          <ClassCard
            key={index}
            className={item.className}
            hour={item.hour}
            classroom={item.classroom}
          />
        ))}

        <View style={{marginTop: 12}}>
          <BottomButton onPress={() => navigation.goBack()}>
            Voltar
          </BottomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClassesTable;
