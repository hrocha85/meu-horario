import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useStyles} from './styles';
import BottomButton from '../../components/BottomButton';
import {Text, useTheme} from 'react-native-paper';
import InputMenu from '../../components/InputMenu';
import ThemeSwitcher from '../../components/Switch';

const CourseSelection = ({navigation}: any): React.JSX.Element => {
  const styles = useStyles();
  const theme = useTheme();

  const [visible, setVisible] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState('Selecione o curso');
  const [selectedPeriod, setSelectedPeriod] = useState('Selecione o período');

  const courses = [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
    },
    {
      title: 'Gestão Empresarial',
    },
    {
      title: 'Gestão Portuária',
    },
    {
      title: 'Logística',
    },
    {
      title: 'Sistemas para Internet',
    },
    {
      title: 'Logística AMS',
    },
    {
      title: 'Processos Gerenciais AMS',
    },
    {
      title: 'Gestão de Recursos Humanos',
    },
    {
      title: 'Ciência de Dados',
    },
  ];

  const periods = [
    {title: 'Matutino'},
    {title: 'Vespertino'},
    {title: 'Noturno'},
  ];

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.switcherStyle}>
        <ThemeSwitcher />
      </View>
      <View style={styles.mainStyle}>
        <Text variant="headlineLarge">Seja bem vindo(a)</Text>

        <View style={styles.formStyle}>
          <Text variant="titleLarge" style={{marginTop: 24}}>
            Selecione o curso
          </Text>
          <InputMenu
            selectedItem={selectedCourses}
            setSelectedItem={setSelectedCourses}
            items={courses}
            width="80%"
          />

          <Text variant="titleLarge" style={{marginTop: 24}}>
            Selecione o período
          </Text>
          <InputMenu
            selectedItem={selectedPeriod}
            setSelectedItem={setSelectedPeriod}
            items={periods}
            width="80%"
          />
        </View>
      </View>

      <BottomButton onPress={() => navigation.navigate('ClassNow')}>
        Continuar
      </BottomButton>
    </SafeAreaView>
  );
};

export default CourseSelection;
