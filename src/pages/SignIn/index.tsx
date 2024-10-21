import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signInSchema, SignInType} from '../../schemas/signInSchema';
import {useStyles} from './styles';
import {formatPhoneNumber, removeMask} from '../../utils';
import BottomButton from '../../components/BottomButton';
import ThemeSwitcher from '../../components/Switch';
// import {MMKV} from 'react-native-mmkv';

import {
  saveUserData,
  getUserData,
  clearUserData,
} from '../../storage/userStorage';

type User = {
  name: string;
  email: string;
  phone: string;
};

// const storage = new MMKV({id: 'myapp'});

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
        // storage.set('user', JSON.stringify({data}));
        setUser({name: data.name, email: data.email, phone: data.phone});
        // await saveUserData({name: data.name, email: data.email});
        navigation.navigate('CourseSelection');
      } else {
        setError('email', {
          type: 'custom',
          message: 'Esse email não está previsto',
        });
      }
    }
  };

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
              fontWeight: '600',
              color: theme.colors.onBackground,
            }}>
            Bem vindo!
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
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

          <Text style={{color: theme.colors.error}}>{user?.name}</Text>
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
