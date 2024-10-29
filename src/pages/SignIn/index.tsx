import React, {useState} from 'react';
import {KeyboardAvoidingView, View, ScrollView} from 'react-native';
import {Text, TextInput, useTheme, Button} from 'react-native-paper';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signInSchema, SignInType} from '../../schemas/signInSchema';
import {useStyles} from './styles';
import {formatPhoneNumber, removeMask} from '../../utils';
import BottomButton from '../../components/BottomButton';

type User = {
  name: string;
  email: string;
  phone: string;
};

const SignIn = ({navigation}: any): React.JSX.Element => {
  const styles = useStyles();
  const theme = useTheme();

  const [user, setUser] = useState<User>();

  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors},
    watch,
    setError,
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {name: '', email: '', phone: ''},
    mode: 'onSubmit',
  });

  const form = watch();

  const handleOnChangeInput = (
    name: 'name' | 'email' | 'phone',
    value: string,
  ) => {
    setValue(name, value);
  };

  const handlePhoneNumberChange = (text: string) => {
    const formattedText = formatPhoneNumber(text);
    handleOnChangeInput('phone', formattedText);
  };

  const handleContinueButton = async (data: SignInType) => {
    const phoneWithoutMask = removeMask(data.phone);
    const validateEmail = data.email.indexOf('@');

    if (validateEmail !== -1) {
      const result = data.email.slice(validateEmail + 1);

      if (result === 'fatec.sp.gov.br') {
        setUser({name: data.name, email: data.email, phone: data.phone});
        navigation.replace('CourseSelection');
      } else {
        setError('email', {
          type: 'custom',
          message: 'Esse email não está previsto',
        });
      }
    }
  };

  return (
    <View style={styles.backgroundStyle}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'height'}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.containerStyle}>
            <View style={styles.welcomeStyle}>
              <Text
                variant="displaySmall"
                style={{color: theme.colors.onBackground}}>
                Bem vindo!
              </Text>
              <Text
                variant="headlineSmall"
                style={{color: theme.colors.onBackground}}>
                Gostaríamos de conhecê-lo melhor:
              </Text>
            </View>

            <View style={styles.formStyle}>
              <Text variant="headlineSmall" style={{marginLeft: 4}}>
                Nome
              </Text>
              <TextInput
                label="Digite seu nome"
                mode="outlined"
                style={styles.inputStyle}
                onChangeText={text => handleOnChangeInput('name', text)}
                activeOutlineColor={theme.colors.outline}
                {...register('name')}
              />
              <Text style={{color: theme.colors.error, width: '100%'}}>
                {errors?.name?.message}
              </Text>

              <Text variant="headlineSmall" style={{marginLeft: 4}}>
                Email
              </Text>
              <TextInput
                label="Digite seu email institucional"
                mode="outlined"
                style={styles.inputStyle}
                onChangeText={text => handleOnChangeInput('email', text)}
                {...register('email')}
              />
              <Text style={{color: theme.colors.error, width: '100%'}}>
                {errors?.email?.message}
              </Text>

              <Text variant="headlineSmall" style={{marginLeft: 4}}>
                Celular
              </Text>
              <TextInput
                label="Digite o número do seu celular"
                mode="outlined"
                keyboardType="numeric"
                style={styles.inputStyle}
                onChangeText={text => handlePhoneNumberChange(text)}
                value={form.phone}
                maxLength={15}
                {...register('phone')}
              />
              <Text style={{color: theme.colors.error, width: '100%'}}>
                {errors?.phone?.message}
              </Text>
            </View>

            <BottomButton
              onPress={handleSubmit(handleContinueButton)}
              disabled={!form.name || !form.email || !form.phone}>
              Continuar
            </BottomButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;
