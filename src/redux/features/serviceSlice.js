import {createSlice} from '@reduxjs/toolkit';
import {
  fetchServices,
  fetchAllServices,
  addService,
  assignProfessionals,
} from '../actions/servicesAction';

const initialState = {
  salonServices: [],
  servicesList: [],
  pagination: {
    limit: 0,
    page: 1,
    totalPages: 0,
    totalRecords: 0,
  },
  allServicesPagination: {
    limit: 0,
    page: 1,
    totalPages: 0,
    totalRecords: 0,
  },

  loading: false,
  serviceLoading: false,
  inProgress: false,
  error: null,
};

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    updateService: (state, action) => {
      state.servicesList = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchServices.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        if (action.meta.arg.page === 1) {
          state.servicesList = action?.payload?.data;
        } else {
          state.servicesList = [
            ...state.servicesList,
            ...action?.payload?.data,
          ];
        }
        state.pagination = action?.payload?.pagination;
        state.loading = false;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // all services for dropdown

      .addCase(fetchAllServices.pending, state => {
        state.serviceLoading = true;
        state.error = null;
      })
      .addCase(fetchAllServices.fulfilled, (state, action) => {
        const transformedData = action?.payload?.data?.map(service => ({
          label: service.name,
          value: service.id, // Convert id to string if needed
        }));

        if (action.meta.arg.page === 1) {
          state.salonServices = transformedData;
        } else {
          state.salonServices = [...state.salonServices, ...transformedData];
        }

        state.allServicesPagination = action?.payload?.pagination;
        state.serviceLoading = false;
      })
      .addCase(fetchAllServices.rejected, (state, action) => {
        state.serviceLoading = false;
        state.error = action.payload;
      })

      // add new service
      .addCase(addService.pending, state => {
        state.inProgress = true;
        state.error = null;
      })
      .addCase(addService.fulfilled, (state, action) => {
        state.inProgress = false;
      })
      .addCase(addService.rejected, (state, action) => {
        state.inProgress = false;
        state.error = action.payload;
      })

      // assign professionals
      .addCase(assignProfessionals.pending, state => {
        state.inProgress = true;
        state.error = null;
      })
      .addCase(assignProfessionals.fulfilled, (state, action) => {
        state.inProgress = false;
      })
      .addCase(assignProfessionals.rejected, (state, action) => {
        state.inProgress = false;
        state.error = action.payload;
      })
      
  },
});

export const {updateService} = serviceSlice.actions;
export default serviceSlice.reducer;
