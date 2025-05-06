import React from 'react';
import apiService, { setToken } from './apiService';

export const registerUser = async (email, password) => {
    try {
      const response = await apiService.post('/auth/register', { email, password });

      if (response.accessToken && response.refreshToken) {

      }

      return response;
    } catch (error) {
      console.error('Login Failed:', error);
      throw error;
    }
  };
