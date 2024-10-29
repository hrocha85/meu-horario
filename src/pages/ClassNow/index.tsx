import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useStyles} from './styles';
import BottomButton from '../../components/BottomButton';
import {Text, useTheme} from 'react-native-paper';
import {format} from 'date-fns';
import RNShakeEvent from 'react-native-shake-event';

const ClassNow = ({navigation}: any): React.JSX.Element => {
  const styles = useStyles();
  const theme = useTheme();

  const [currentTime, setCurrentTime] = useState(new Date());
  const [header, setHeader] = useState(false);

  // Atualiza o tempo a cada 6 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  // Adiciona o listener de shake
  // useEffect(() => {
  //   const subscription = RNShakeEvent.addListener('shake', () => {
  //     setHeader(prev => !prev); // Alterna o estado do header
  //   });

  //   return () => {
  //     subscription.remove(); // Limpa a assinatura ao desmontar o componente
  //   };
  // }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.mainStyle}>
        <Text variant="headlineLarge">Olá, Henrique!</Text>
        <Text variant="headlineSmall">São {format(currentTime, 'kk:mm')}</Text>
        <Text>{header ? 'Ligado' : 'Desligado'}</Text>{' '}
        {/* Mostra o status do header */}
        <View style={styles.infoStyle}>
          <Text variant="titleLarge">
            Próxima aula: <Text>Marketing</Text>
          </Text>
          <Text variant="titleLarge">Hoje às 12:00, Sala 1B</Text>
        </View>
      </View>

      <BottomButton onPress={() => navigation.navigate('ClassesTable')}>
        Ver todas as aulas
      </BottomButton>
    </SafeAreaView>
  );
};

export default ClassNow;
