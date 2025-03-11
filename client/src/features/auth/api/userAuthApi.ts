import axios from 'axios';

const API_URL = '';

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
) => {
  if (password !== confirmPassword) {
    throw new Error('Пароли не совпадают');
  }

  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });

    if (response.data.token) {
      return response.data.token;
    } else {
      throw new Error('Не удалось зарегистрировать пользователя');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Ошибка при регистрации');
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    if (response.data.token && response.data.name) {
      return {
        token: response.data.token,
        name: response.data.name,
      };
    } else {
      throw new Error('Неверный email или пароль');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Ошибка при входе');
  }
};
