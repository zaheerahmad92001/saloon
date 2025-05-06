import {createAsyncThunk} from '@reduxjs/toolkit';
import apiService from '../../services/apiService';


export const fetch_request_and_complaint_count_by_type = createAsyncThunk(
    'salon/fetch-request-complaint-count',
    async (type, {rejectWithValue}) => {
      try {
        const response = await apiService.get(`/salon/requestComplaint/countsByType?type=${type}`);
        if (!response?.data) {
            return rejectWithValue('Invalid server response. Please try again.');
          }
        return {data: response?.data , type:type};
      } catch (error) {
        console.log('fetch-request-complaint-count api error', error);
        if (!error.response) {
          return rejectWithValue(
            'Network error: Please check your internet connection.',
          );
        }
        const errorMessage =
          error?.response?.data?.message ||
          'failed to fetch-request-complaint-count. Please try again.';
        return rejectWithValue(errorMessage);
      }
    },
  );


  export const fetch_request_and_complaint = createAsyncThunk(
    'salon/fetch-request-complaint',
    async ({salonId, type,page = 1,limit = 10}, {rejectWithValue}) => {
     
      try {
        const response = await apiService.get(`/salon/requestComplaint?salonId=${salonId}&type=${type}&page=${page}&limit=${limit}`);
        if (!response?.data) {
            return rejectWithValue('Invalid server response. Please try again.');
          }
          console.log('fetch-request-complaint', response);
        return {data: response?.data , type:type};
      } catch (error) {
        console.log('fetch-request-complaint api error', error);
        if (!error.response) {
          return rejectWithValue(
            'Network error: Please check your internet connection.',
          );
        }
        const errorMessage =
          error?.response?.data?.message ||
          'failed to fetch-request-complaint. Please try again.';
        return rejectWithValue(errorMessage);
      }
    },
  );
