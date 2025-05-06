import {createAsyncThunk} from '@reduxjs/toolkit';
import apiService from '../../services/apiService';
import {
  addProfessional,
  updateProfessional,
} from '../features/professionalsSlice';

export const professionals = createAsyncThunk(
  'salon/get-professionals',
  async ({page = 1, limit = 10}, {rejectWithValue}) => {
    try {
      const response = await apiService.get(
        `/salon/professional?page=${page}&limit=${limit}`,
      );

      if (!response?.data) {
        return rejectWithValue('Invalid server response. Please try again.');
      }
      console.log('here is professional response', response.data);
      return response?.data;
    } catch (error) {
      console.log('professionals API error', error);
      if (!error.response) {
        return rejectWithValue(
          'Network error: Please check your internet connection.',
        );
      }

      const errorMessage =
        error?.response?.data?.message ||
        'Failed to load professionals. Please try again.';
      return rejectWithValue(errorMessage);
    }
  },
);

export const addSlots = createAsyncThunk(
  'salon/add-slots',
  async (infoList, {rejectWithValue}) => {
    try {
      const response = await apiService.post(
        '/salon/professional/add-salon-slots',
        infoList,
      );
      if (!response?.data) {
        return rejectWithValue('Invalid server response. Please try again.');
      }
      return response.data?.data;
    } catch (error) {
      console.log('add slots API error', error);
      if (!error.response) {
        return rejectWithValue(
          'Network error: Please check your internet connection.',
        );
      }

      const errorMessage =
        error?.response?.data?.message ||
        'Failed to add slots. Please try again.';
      return rejectWithValue(errorMessage);
    }
  },
);

export const fetchSalonSlots = createAsyncThunk(
  'salon/fetch-salon-slots',
  async (salonId, {rejectWithValue}) => {
    try {
      const response = await apiService.get(
        `/salon/professional/${salonId}/slots`,
      );
      if (!response?.data) {
        return rejectWithValue('Invalid server response. Please try again.');
      }
      return response.data?.slots;
    } catch (error) {
      console.log('fetch slon slots API error', error);
      if (!error.response) {
        return rejectWithValue(
          'Network error: Please check your internet connection.',
        );
      }

      const errorMessage =
        error?.response?.data?.message ||
        'Failed to fetch salon slots. Please try again.';
      return rejectWithValue(errorMessage);
    }
  },
);

export const saveProfessionalAvailability = createAsyncThunk(
  'salon/save-professional-availability',
  async (data, {dispatch, rejectWithValue}) => {
    const formData = new FormData();

    formData.append('name', data?.name ?? '');
    formData.append('phoneNumber', data?.phone ?? '');
    formData.append('email', data?.email ?? '');
    formData.append('experience', data?.experience ?? '');
    formData.append('salonId', data.salonId?.toString() ?? '');
    formData.append('speciality', data?.speciality);
    formData.append(
      'availability',
      JSON.stringify({
        slots: data?.savedSchedules ?? [],
        recur: data?.scheduleRecur,
        scheduleType: data?.schedulePeriod,
      }),
    );

    // Append image if present
    if (data?.profile?.uri) {
      formData.append('professionImage', {
        uri: data?.profile.uri,
        name: data?.profile.fileName,
        type: data?.profile.type,
      });
    }

    try {
      const response = await apiService.postMultipart(
        '/salon/professional',
        formData,
      );
      if (!response?.data) {
        return rejectWithValue('Invalid server response. Please try again.');
      }
      // dispatch(addProfessional(newProfessionalData));
      console.log('here is response', response?.data?.data);
      return response.data?.data;
    } catch (error) {
      console.log('save professional availability API error', error);
      if (!error.response) {
        console.log('here is error', error.response);
        return rejectWithValue(
          'Network error: Please check your internet connection.',
        );
      }

      const errorMessage =
        error?.response?.data?.message ||
        'Failed to save professional availability. Please try again.';
      return rejectWithValue(errorMessage);
    }
  },
);

export const singleProfessionalProfile = createAsyncThunk(
  'salon/professional-profile',
  async (id, {dispatch, rejectWithValue}) => {
    try {
      const response = await apiService.get(`/salon/professional/${id}`);
      if (!response?.data) {
        return rejectWithValue('Invalid server response. Please try again.');
      }
      console.log(
        'here is response professional profile',
        response?.data?.data,
      );
      // dispatch(updateProfessional(response?.data?.data))
      return response.data?.data;
    } catch (error) {
      console.log('fetch single professional  API error', error);
      if (!error.response) {
        return rejectWithValue(
          'Network error: Please check your internet connection.',
        );
      }

      const errorMessage =
        error?.response?.data?.message ||
        'Failed to fetch single professional profile. Please try again.';
      return rejectWithValue(errorMessage);
    }
  },
);

export const updateSingleProfessionalProfile = createAsyncThunk(
  'salon/update-professional-profile',
  async (data, {dispatch, rejectWithValue}) => {
    const professionalId = data.professionalId;

    const formData = new FormData();

    formData.append('name', data?.name ?? '');
    formData.append('phoneNumber', data?.formattedValue ?? '');
    formData.append('email', data?.email ?? '');
    formData.append('experience', data?.experience ?? '');
    formData.append('salonId', data.salonId?.toString() ?? '');
    formData.append('speciality', data?.speciality);
    if (data?.profileImage?.uri) {
      formData.append('professionImage', {
        uri: data?.profileImage.uri,
        name: data?.profileImage.fileName,
        type: data?.profileImage.type,
      });
    }
    formData.append('existingImage', data?.existingImage);

    try {
      const response = await apiService.putMultipart(
        `/salon/professional/${professionalId}`,
        formData,
      );
      if (!response?.data) {
        return rejectWithValue('Invalid server response. Please try again.');
      }
      dispatch(updateProfessional(response?.data?.data));
      return response.data?.data;
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
  },
);

export const fetchProfessionalAvailability = createAsyncThunk(
  'salon/professional-availability',
  async (professionalId, {dispatch, rejectWithValue}) => {
    try {
      const response = await apiService.get(
        `/salon/professional/${professionalId}/availability`,
      );
      if (!response?.data) {
        return rejectWithValue('Invalid server response. Please try again.');
      }
      console.log('here is response professional-availability', response?.data);
      return response?.data;
    } catch (error) {
      console.log('professional-availability  API error', error);
      if (!error.response) {
        return rejectWithValue(
          'Network error: Please check your internet connection.',
        );
      }

      const errorMessage =
        error?.response?.data?.message ||
        'Failed to professional-availability. Please try again.';
      return rejectWithValue(errorMessage);
    }
  },
);


export const updateProfessionalAvailability = createAsyncThunk(
  'salon/upldate-professional-availability',
  async ({professionalId, payload}, {dispatch, rejectWithValue}) => {

    const requestData = {
      recur:payload?.scheduleRecur,
      scheduleType:payload?.schedulePeriod,
      slots:payload?.slots,
    };

    try {
      const response = await apiService.put(`/salon/professional/${professionalId}/availability`,requestData);
      if (!response?.data) {
        return rejectWithValue('Invalid server response. Please try again.')
      }
      return response?.data?.data;
    } catch (error) {
      console.log('update-professional-availability  API error', error);
      if (!error.response) {
        return rejectWithValue(
          'Network error: Please check your internet connection.',
        );
      }
      const errorMessage =
        error?.response?.data?.message ||
        'Failed to update-professional-availability. Please try again.';
      return rejectWithValue(errorMessage);
    }
  },
);

export const fetchProfessionalBySalonId = createAsyncThunk(
  'salon/fetch-professional-by-salonId',
  async ({salonId, page, limit}, {rejectWithValue}) => {
    try {
      const response = await apiService.get(
        `/salon/professional/bySalonId/${salonId}?page=${page}&limit=${limit}`,
      );
      if (!response?.data) {
        return rejectWithValue('Invalid server response. Please try again.');
      }
      // console.log('here is response', response?.data)
      return response?.data;
    } catch (error) {
      console.log('fetch-professional-by-salonId api error', error);
      if (!error.response) {
        return rejectWithValue(
          'Network error: Please check your internet connection.',
        );
      }
      const errorMessage =
        error?.response?.data?.message ||
        'failed to fetch-professional-by-salonId. Please try again.';
      return rejectWithValue(errorMessage);
    }
  },
);
