import { createSlice } from '@reduxjs/toolkit';
import {
  professionals ,
  addSlots , 
  fetchSalonSlots ,
  saveProfessionalAvailability ,
  updateSingleProfessionalProfile ,
  fetchProfessionalBySalonId,
  fetchProfessionalAvailability,
} from '../actions/professionalsAction'
import { convertTo12HourFormat } from '../../functions';

const initialState = {
  professionalList:[],
  pagination: {
    page: 1,
    totalPages: 1,
    totalRecords: 0,
    limit: 10
  },

  salonProfessionals: [], // in assign-professional bottom-sheet
  salon_Professional_Pagination: {
    limit: 10,
    page: 1,
    totalPages: 0,
    totalRecords: 0,
  },
  professionalAvailability:{},
  loading: false,
  addSlotsInProgress:false,
  addSlotsError:null,
  salonSlotList:[],
  error: null,
};

const professionalsSlice = createSlice({
  name: 'professionals',
  initialState,
  reducers: {
    updateProfessional: (state, action) => {
      const updatedProfessional = action.payload;
      const index = state.professionalList.findIndex(p => p.id === updatedProfessional.id);
      if (index !== -1) {
        state.professionalList[index] = {
          ...state.professionalList[index],
          ...updatedProfessional,
        };
      }
    },
    addProfessional: (state, action) => {
      state.professionalList.unshift(action.payload);
      state.pagination.totalRecords += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(professionals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(professionals.fulfilled, (state, action) => {
        state.loading = false;

        // If this is the first page, replace data; otherwise append
        if (action.meta.arg.page === 1) {
          state.professionalList = action.payload.professionals;
        } else {
          state.professionalList = [...state.professionalList, ...action.payload.professionals];
        }
        state.pagination = action.payload.pagination;
      })
      .addCase(professionals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // for add slots
      .addCase(addSlots.pending, (state) => {
        state.addSlotsInProgress = true;
        state.addSlotsError = null;
      })
      .addCase(addSlots.fulfilled, (state, action) => {
        state.addSlotsInProgress = false;
      })
      .addCase(addSlots.rejected, (state, action) => {
        state.addSlotsInProgress = false;
        state.addSlotsError = action.payload;
      })

      // fetching salon slots
      .addCase(fetchSalonSlots.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSalonSlots.fulfilled, (state, action) => {
        state.loading = false;
        state.salonSlotList = action.payload?.map(slot => ({
            id: slot.id,
            seats: slot.seats,
            startTime: convertTo12HourFormat(slot?.startTime),
            endTime: convertTo12HourFormat(slot?.endTime),
          }));
      })
      .addCase(fetchSalonSlots.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

// saving professional slots
      .addCase(saveProfessionalAvailability.pending, (state) => {
        state.addSlotsInProgress = true;
        state.error = null;
      })
      .addCase(saveProfessionalAvailability.fulfilled, (state, action) => {
        state.addSlotsInProgress = false;
      })
      .addCase(saveProfessionalAvailability.rejected, (state, action) => {
        state.addSlotsInProgress = false;
        state.addSlotsError = action.payload;
      })
      // updating single professionals
      .addCase(updateSingleProfessionalProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSingleProfessionalProfile.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateSingleProfessionalProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // professionals by salon id
      .addCase(fetchProfessionalBySalonId.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfessionalBySalonId.fulfilled, (state, action) => {
        if (action.meta.arg.page === 1) {
          state.salonProfessionals = action?.payload?.professionals;
        } else {
          state.salonProfessionals = [
            ...state.salonProfessionals,
            ...action?.payload?.professionals,
          ];
        }
        state.salon_Professional_Pagination = action?.payload?.pagination;
        state.loading = false;
      })
      .addCase(fetchProfessionalBySalonId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // single professional availability

      .addCase(fetchProfessionalAvailability.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfessionalAvailability.fulfilled, (state, action) => {
       state.professionalAvailability = action.payload;
       state.loading = false;
      })
      .addCase(fetchProfessionalAvailability.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const {updateProfessional ,addProfessional} = professionalsSlice.actions
export default professionalsSlice.reducer;
