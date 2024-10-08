import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signInSchema, SignInType} from '../../schemas/signInSchema';
import {useStyles} from './styles';
import {formatPhoneNumber, removeMask} from '../../utils';
import BottomButton from '../../components/BottomButton';
import ThemeSwitcher from '../../components/Switch';

const SignIn = ({navigation}: any): React.JSX.Element => {
  const styles = useStyles();
  const theme = useTheme();

  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors},
    watch,
    setError,
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
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
        // Salvar dados do usuário no AsyncStorage
        await AsyncStorage.setItem('userData', JSON.stringify(data));
        navigation.navigate('Home', {name: data.name});
      } else {
        setError('email', {
          type: 'custom',
          message: 'Esse email não está previsto',
        });
      }
    }
  };

  // Verifica se os dados do usuário já estão salvos
  useEffect(() => {
    const checkUserData = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        const parsedData = JSON.parse(userData);
        navigation.navigate('Home', {name: parsedData.name});
      }
    };

    checkUserData();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.switcherStyle}>
        <ThemeSwitcher />
      </View>
      <View style={styles.containerStyle}>
        <View style={styles.welcomeStyle}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: theme.colors.onBackground,
            }}>
            Bem vindo!
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: theme.colors.onBackground,
            }}>
            Gostaríamos de conhecê-lo melhor:
          </Text>
        </View>

        <View style={styles.formStyle}>
          <TextInput
            label="Digite seu nome"
            mode="outlined"
            style={styles.inputStyle}
            onChangeText={text => handleOnChangeInput('name', text)}
            {...register('name')}
          />
          <Text style={{color: theme.colors.error, width: '100%'}}>
            {errors?.name?.message}
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
    </SafeAreaView>
  );
};

export default SignIn;
