import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useStyles} from './styles';
import BottomButton from '../../components/BottomButton';
import {Text, useTheme} from 'react-native-paper';
import {format} from 'date-fns';

const ClassNow = ({navigation}: any): React.JSX.Element => {
  const styles = useStyles();
  const theme = useTheme();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.mainStyle}>
        <Text variant="headlineLarge">Olá, Henrique!</Text>
        <Text variant="headlineSmall">São {format(currentTime, 'kk:mm')}</Text>

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
