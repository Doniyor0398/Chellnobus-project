import axios from 'axios';

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
) => {
  const response = await axios.post('api poka ne gotov', {
    name,
    email,
    password,
    confirmPassword,
  });
  return response.data.token;
};

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post('api poka ne gotov', { email, password });
  return response.data.token;
};
