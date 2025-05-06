import {createAsyncThunk} from '@reduxjs/toolkit';
import apiService from '../../services/apiService';

import {updateUser} from '../features/authSlice';


export const getSalon = createAsyncThunk(
  'profile/get-salon',
  async (id, {dispatch, rejectWithValue}) => {
    try {
      const response = await apiService.get(`/salon/salon/${id}`);
      dispatch(updateUser(response?.data));
      return response?.data
    } catch (error) {
      console.log('getUser api error', error);
      if (!error.response) {
        return rejectWithValue(
          'Network error: Please check your internet connection.',
        );
      }
      const errorMessage =
        error?.response?.data?.message ||
        'getting User data failed. Please try again.';
      return rejectWithValue(errorMessage);
    }
  },
);

export const updateSalonProfile= createAsyncThunk(
  'profile/update-salon-profile',
  async({data} , {dispatch , rejectWithValue})=>{
  const salonId = data?.salonId

    const formData = new FormData();

    formData.append('name', data?.salonName ?? '');
    formData.append('phoneNumber', data?.formattedValue ?? '');
    formData.append('ownerName', data?.ownerName)
    formData.append('email', data?.email ?? '');
    formData.append('address', data?.address ?? '');
    formData.append('postalCode', data?.postCode ?? '');
    if (data?.profileImage?.uri) {
      formData.append('salonImage', {
        uri: data?.profileImage.uri,
        name: data?.profileImage.fileName,
        type: data?.profileImage.type,
      });
    }else{
    formData.append('existingImageId',data?.existingImage);
  }

console.log('data sending to server', formData)
    try {
      const response = await apiService.putMultipart(`/salon/salon/${salonId}`,formData);
      if (!response?.data) {
        return rejectWithValue('Invalid server response. Please try again.');
      }
      console.log('updateSalonProfile response',response)
      dispatch(updateUser(response?.data?.data))
      return response;
    } catch (error) {
      console.log('update single professional  API error', error);
      if (!error.response) {
        return rejectWithValue(
          'Network error: Please check your internet connection.',
        );
      }

      const errorMessage =
        error?.response?.data?.message ||
        'Failed to update single professional profile. Please try again.';
      return rejectWithValue(errorMessage);
    }
  }
);

// export const getUser = createAsyncThunk(
//   'admin/getUser',
//   async (id, {dispatch, rejectWithValue}) => {
//     try {
//       const response = await apiService.get(`/admin/user/getUser/${id}`);
//       dispatch(updateUser(response?.data?.data));
//       return response?.data?.data;
//     } catch (error) {
//       console.log('getUser api error', error);
//       if (!error.response) {
//         return rejectWithValue(
//           'Network error: Please check your internet connection.',
//         );
//       }
//       const errorMessage =
//         error?.response?.data?.message ||
//         'getting User data failed. Please try again.';
//       return rejectWithValue(errorMessage);
//     }
//   },
// );
