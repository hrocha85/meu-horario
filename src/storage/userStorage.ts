import MMKV from './mmkv';

// Função para salvar os dados do usuário
export async function saveUserData(userData: any) {
  await MMKV.setString('user_name', userData.name);
  await MMKV.setString('user_email', userData.email);
}

// Função para recuperar os dados do usuário
export const getUserData = async () => {
  const name = await MMKV.getString('user_name');
  const email = await MMKV.getString('user_email');

  return {name, email};
};

// Função para limpar os dados do usuário
export const clearUserData = () => {
  MMKV.removeItem('user_name');
  MMKV.removeItem('user_email');
};
