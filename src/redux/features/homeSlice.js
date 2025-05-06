import { createSlice } from '@reduxjs/toolkit';
import { dashboardInfo } from '../actions/homeActions';

const initialState = {
    overViewData: {
        noOfBookings: 0,
        noOfProfessionals: 0,
        noOfServices: 0,
        totalIncome: 0,
      },
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateOverviewData: (state, action) => {
      state.overViewData = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(dashboardInfo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(dashboardInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.overViewData = action.payload;
      })
      .addCase(dashboardInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateOverviewData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
