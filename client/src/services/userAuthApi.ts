import axios from 'axios';
import { setItem } from '../utils/storage';

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
) => {
  try {
    const response = await axios.post('http://localhost:5001/users', {
      name,
      email,
      password,
      confirmPassword,
    });

    if (response.data.token) {
      setItem('jwtToken', response.data.token);
    }

    return response.data.token;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post('http://localhost:5001/login', {
      email,
      password,
    });

    if (response.data.token) {
      setItem('authToken', response.data.token); 
    }

    return response.data.token;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
