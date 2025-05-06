import {createAsyncThunk} from '@reduxjs/toolkit';
import apiService from '../../services/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storagekeys} from '../../staticData';
import { saveToLocalStorage } from '../../functions';

// 🔹 Register User Async Action
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, {rejectWithValue}) => {
    
    let userData = {
      role: 'Salon',
      agree: formData.isChecked,
      address: formData.address,
      ownerName: formData.ownerName,
      salonName: formData.salonName,
      phoneNumber: formData.formattedValue,
      password: '12345',
      email: formData.email,
      name: formData.ownerName,
    };

    try {
      const response = await apiService.post('/auth/register', userData);
     
      if (response?.success) {
        console.log('salon register successfully', response.success)
        // saveToLocalStorage(storagekeys.isFirstLaunch , true)
      }
      return response?.success;
    } catch (error) {
      if (!error.response) {
        return rejectWithValue(
          'Network error: Please check your internet connection.',
        );
      }
      const errorMessage =
        error?.response?.data?.message ||
        'Registration failed. Please try again.';
      return rejectWithValue(errorMessage);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, {rejectWithValue}) => {
    try {
      const response = await apiService.post('/auth/salon-login', userData);
      console.log('here is response login-user', response?.data)
      await AsyncStorage.setItem(
        storagekeys.authToken,
        response?.data?.data?.token,
      );
      return response?.data?.data; 

    } catch (error) {
      console.log('login api error', error)
      if (!error.response) {
        return rejectWithValue(
          'Network error: Please check your internet connection.',
        );
      }
      const errorMessage =
        error?.response?.data?.message ||
        'Login failed. Please try again.';
      return rejectWithValue(errorMessage);
    }
  },
);
