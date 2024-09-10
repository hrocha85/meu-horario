import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { styles } from './styles';
import ButtonPrimary from '../../components/ButtonPrimary';

const Home = ({ navigation, route }: any): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.containerStyle}>
        <View style={styles.mainStyle}>
          <Text>Seja bem vindo(a) {route?.params?.name}</Text>
          <Text>Selecione o curso</Text>
          <Text>Selecione o período</Text>
        </View>

        <ButtonPrimary>
          Continuar
        </ButtonPrimary>
      </View>
    </SafeAreaView>
  );
}

export default Home;