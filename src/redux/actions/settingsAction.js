import {createAsyncThunk} from '@reduxjs/toolkit';
import apiService from '../../services/apiService';


export const fetchTermsAndPrivacyPolicy = createAsyncThunk(
    'salon/fetch-terms-conditions',
    async (type, {rejectWithValue}) => {
      try {
        const response = await apiService.get(`/salon/settings/termsCondition/${type}`);
        if (!response?.data) {
            return rejectWithValue('Invalid server response. Please try again.');
          }
        return {data: response?.data , type:type}; 
      } catch (error) {
        console.log('fetch terms and condition api error', error)
        if (!error.response) {
          return rejectWithValue(
            'Network error: Please check your internet connection.',
          );
        }
        const errorMessage =
          error?.response?.data?.message ||
          'failed to fetch terms and condition. Please try again.';
        return rejectWithValue(errorMessage);
      }
    },
  )

  export const fetchSettingByType = createAsyncThunk(
    'salon/fetch-setting-type',
    async ({type, salonId}, {rejectWithValue}) => {
      try {
        const response = await apiService.get(`/salon/settings/getByType/${type}?salonId:${salonId}`);
        if (!response?.data) {
            return rejectWithValue('Invalid server response. Please try again.');
          }
        return {data: response?.data , type:type}; 
      } catch (error) {
        console.log('fetch setting by type api error', error)
        if (!error.response) {
          return rejectWithValue(
            'Network error: Please check your internet connection.',
          );
        }
        const errorMessage =
          error?.response?.data?.message ||
          'failed to fetch setting by type. Please try again.';
        return rejectWithValue(errorMessage);
      }
    },
  )

  export const addSettingsByType = createAsyncThunk(
    'salon/add-setting-type',
    async (payload, {rejectWithValue}) => {
      try {
        const response = await apiService.post(`/salon/settings`,payload);
        return response;
      } catch (error) {
        console.log('add setting by type api error', error)
        if (!error.response) {
          return rejectWithValue(
            'Network error: Please check your internet connection.',
          );
        }
        const errorMessage =
          error?.response?.data?.message ||
          'failed to add setting by type. Please try again.';
        return rejectWithValue(errorMessage);
      }
    },
  )