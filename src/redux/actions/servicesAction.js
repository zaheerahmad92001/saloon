import {createAsyncThunk} from '@reduxjs/toolkit';
import apiService from '../../services/apiService';
import axios from 'axios';

// service management screen
export const fetchServices = createAsyncThunk(
    'salon/fetch-service',
    async ({page,limit = 10,status,salonId}, {rejectWithValue}) => {
      try {
        const response = await apiService.get(`/salon/services?page=${page}&limit=${limit}&status=${status}&salonId=${salonId} `);
        if (!response?.data) {
            return rejectWithValue('Invalid server response. Please try again.');
          }
        return response?.data; 
      } catch (error) {
        console.log('fetch salon services api error', error)
        if (!error.response) {
          return rejectWithValue(
            'Network error: Please check your internet connection.',
          );
        }
        const errorMessage =
          error?.response?.data?.message ||
          'failed to fetch salon services data. Please try again.';
        return rejectWithValue(errorMessage);
      }
    },
  );

//   for dropDown
  export const fetchAllServices = createAsyncThunk(
    'salon/fetch-all-service',
    async ({page,limit = 10}, {rejectWithValue}) => {
      try {
        const response = await apiService.get(`/salon/services/allServices?page=${page}&limit=${limit}`);
        if (!response?.data) {
            return rejectWithValue('Invalid server response. Please try again.');
          }
          console.log('fetch all service ', response?.data)
        return response?.data; 
      } catch (error) {
        console.log('fetch all services api error', error)
        if (!error.response) {
          return rejectWithValue(
            'Network error: Please check your internet connection.',
          );
        }
        const errorMessage =
          error?.response?.data?.message ||
          'failed to fetch all services data. Please try again.';
        return rejectWithValue(errorMessage);
      }
    },
  );

  export const addService = createAsyncThunk(
    'salon/add-new-service',
    async (data, {rejectWithValue}) => {
        const rawData =  JSON.stringify(data)
      try {
        const response = await apiService.post(`/salon/services`,rawData);
        if (!response?.data) {
            return rejectWithValue('Invalid server response. Please try again.');
          }
        return response; 
      } catch (error) {
        console.log('add new service api error', error)
        if (!error.response) {
          return rejectWithValue(
            'Network error: Please check your internet connection.',
          );
        }
        const errorMessage =
          error?.response?.data?.message ||
          'failed to add new service data. Please try again.';
        return rejectWithValue(errorMessage);
      }
    },
  );

  export const assignProfessionals = createAsyncThunk(
    'salon/assign-professional',
    async ({subServiceList , serviceId , status}, {rejectWithValue}) => {

        const payload = {
          subServiceData: status === 'subservice' ? subServiceList : [],
          // professionalIds:
          //   status !== 'subservice' && subServiceList.length > 0
          //     ? subServiceList[0].professionalIds
          //     : [],
        };
        
      

      // console.log('here is payload ', payload)
// let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzQ1MjExNjQzLCJleHAiOjE3NDU4MTY0NDN9.PD7edtUTlXUXeyFreD55raWGIdI6wivoieMo62dNCLI'
      // try {
      //   const response = await fetch(`https://be.anaqa.sa/api/salon/services/assignProfessional/${serviceId}`, {
      //     method: 'PUT',
      //     headers: {
      //       // 'Content-Type': 'application/json',
      //       // Add Authorization or other headers if needed
      //       'Authorization': `Bearer ${token}`
      //     },
      //     body: payload,
      //   });
      
      //   if (!response.ok) {
      //     const errorData = await response.json();
      //     console.log('errorData',errorData)
      //     const errorMessage =
      //       errorData?.message || 'Failed to fetch-professional-by-salonId. Please try again.';
      //     return rejectWithValue(errorMessage);
      //   }
      
      //   const data = await response.json();
      // console.log('here is data', data)
      //   if (!data) {
      //     return rejectWithValue('Invalid server response. Please try again.');
      //   }
      
      //   return data;
      
      // } catch (error) {
      //   console.log('fetch-professional-by-salonId fetch error', error);
      //   return rejectWithValue(
      //     'Network error: Please check your internet connection.'
      //   );
      // }
      
      
      try {
        const response = await apiService.put(`/salon/services/assignProfessional/${serviceId}`,payload);
        console.log('here is response in assignProfessional', response)
        return response; 
      } catch (error) {
        console.log('assign professional api error', error)
        if (!error.response) {
          return rejectWithValue(
            'Network error: Please check your internet connection.',
          );
        }
        const errorMessage =
          error?.response?.data?.message ||
          'failed to assign professional Please try again.';
        return rejectWithValue(errorMessage);
      }
    },
  );