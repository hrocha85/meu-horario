import React, {useState} from 'react';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {useStyles} from './styles';
import BottomButton from '../../components/BottomButton';
import {Divider, Text, TextInput, useTheme} from 'react-native-paper';
import InputMenu from '../../components/InputMenu';

const errorTypes = [
  {
    value: 'room_change',
    title: 'Mudança de Sala',
  },
  {
    value: 'class_cancellation',
    title: 'Cancelamento da Aula',
  },
  {
    value: 'professor_absent',
    title: 'Professor Ausente',
  },
  {
    value: 'professor_delay',
    title: 'Atraso do Professor',
  },
  {
    value: 'wrong_time',
    title: 'Erro de Horário',
  },
  {
    value: 'wrong_subject',
    title: 'Erro na Disciplina',
  },
  {
    value: 'mode_change',
    title: 'Mudança de Modalidade',
  },
  {
    value: 'location_error',
    title: 'Informações de Localização',
  },
  {
    value: 'teacher_change',
    title: 'Mudança de Professor',
  },
  {
    value: 'technical_issues',
    title: 'Problemas Técnicos',
  },
  {
    value: 'date_change',
    title: 'Mudança de Data',
  },
  {
    value: 'other_error',
    title: 'Outro',
  },
];

const messageTypes = {
  room_change: 'Por favor, descreva a nova sala da aula.',
  class_cancellation: 'Por favor, informe o motivo do cancelamento.',
  professor_absent: 'Por favor, explique a ausência do professor.',
  professor_delay: 'Por favor, indique o tempo de atraso.',
  wrong_time: 'Por favor, insira o horário correto da aula.',
  wrong_subject: 'Por favor, descreva a disciplina correta.',
  mode_change: 'Por favor, informe a nova modalidade da aula.',
  location_error: 'Por favor, descreva a localização correta.',
  teacher_change: 'Por favor, informe quem é o novo professor.',
  technical_issues: 'Por favor, descreva o problema técnico encontrado.',
  date_change: 'Por favor, informe a nova data da aula.',
  other_error: 'Por favor, informe o erro que foi encontrado.',
};

const ClassesTable = ({route}): React.JSX.Element => {
  const styles = useStyles();
  const theme = useTheme();
  const [selectedTypeError, setSelectedTypeError] = useState(
    'Selecione o tipo de erro',
  );
  const [selectedValueError, setSelectedValueError] = useState('');
  const [description, setDescription] = useState('');

  const handleSelectError = (value: {title: string; value: string}) => {
    console.log(value);
    setSelectedTypeError(value.title);
    setSelectedValueError(value.value);
  };

  return (
    <View style={styles.backgroundStyle}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'height'}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Text
            variant="headlineLarge"
            style={{textAlign: 'center', marginVertical: 12}}>
            Reportar Erro
          </Text>

          <Text
            variant="headlineSmall"
            style={{textAlign: 'center', marginVertical: 12}}>
            Aula: {route.params.className}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 8,
            }}>
            <Text
              variant="headlineSmall"
              style={{textAlign: 'center', marginVertical: 12}}>
              Sala: {route.params.classroom}
            </Text>

            <Divider
              style={{
                width: 2,
                height: '100%',
                backgroundColor: theme.colors.primary,
              }}
            />

            <Text
              variant="headlineSmall"
              style={{textAlign: 'center', marginVertical: 12}}>
              Hora: {route.params.hour}
            </Text>
          </View>

          <View style={styles.mainContainerStyle}>
            <View style={styles.selectedStyle}>
              <Text variant="titleLarge" style={{marginVertical: 16}}>
                Escolha o tipo de erro
              </Text>
              <InputMenu
                selectedItem={selectedTypeError}
                onSelect={(item: {title: string; value: string}) => {
                  handleSelectError(item);
                }}
                items={errorTypes}
                width="80%"
              />

              <Text variant="titleLarge" style={{marginVertical: 16}}>
                Descreva o erro encontrado
              </Text>
              <TextInput
                multiline
                numberOfLines={12}
                value={description}
                onChangeText={setDescription}
                placeholder={
                  selectedValueError
                    ? messageTypes[selectedValueError]
                    : 'Digite sua mensagem aqui...'
                }
              />
            </View>
          </View>
          <BottomButton>Enviar</BottomButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ClassesTable;
