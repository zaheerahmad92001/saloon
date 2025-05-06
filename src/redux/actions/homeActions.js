import {createAsyncThunk} from '@reduxjs/toolkit';
import apiService from '../../services/apiService';


export const dashboardInfo = createAsyncThunk(
    'salon/dashboard',
    async (salonId, {rejectWithValue}) => {
      try {
        const response = await apiService.get(`/salon/dashboard?salonId=${salonId}`);
        if (!response?.data) {
            return rejectWithValue('Invalid server response. Please try again.');
          }
        return response?.data; 
      } catch (error) {
        console.log('dashboard api error', error)
        if (!error.response) {
          return rejectWithValue(
            'Network error: Please check your internet connection.',
          );
        }
        const errorMessage =
          error?.response?.data?.message ||
          'failed to load dashboard data. Please try again.';
        return rejectWithValue(errorMessage);
      }
    },
  );