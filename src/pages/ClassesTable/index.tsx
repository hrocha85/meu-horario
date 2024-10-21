import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useStyles} from './styles';
import BottomButton from '../../components/BottomButton';
import {Text, useTheme} from 'react-native-paper';
import ThemeSwitcher from '../../components/Switch';
import {format} from 'date-fns';
import {formatDate} from '../../utils';
import ClassCard from './components/ClassCard';

const ClassesTable = ({navigation}: any): React.JSX.Element => {
  const styles = useStyles();
  const theme = useTheme();

  const classData = [
    {className: 'Matemática', hour: '08:00'},
    {className: 'Inglês', hour: '10:00'},
    {className: 'História', hour: '12:00'},
    {className: 'Geografia', hour: '14:00'},
    {className: 'Educação Física', hour: '16:00'},
  ];

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.switcherStyle}>
        <ThemeSwitcher />
      </View>

      <View style={styles.titleStyle}>
        <Text variant="headlineLarge">Horário de hoje</Text>
        <Text variant="headlineSmall" style={{marginTop: 8}}>
          {format(new Date(), 'dd/MM/yyyy')}
        </Text>
        <Text variant="headlineSmall">{formatDate(new Date(), 'EEEE')}</Text>
      </View>

      <ScrollView style={{maxHeight: '60%'}}>
        {classData.map((item, index) => (
          <ClassCard key={index} className={item.className} hour={item.hour} />
        ))}
      </ScrollView>

      <BottomButton onPress={() => navigation.navigate('ClassNow')}>
        Voltar
      </BottomButton>
    </SafeAreaView>
  );
};

export default ClassesTable;
