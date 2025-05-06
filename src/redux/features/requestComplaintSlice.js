import {createSlice} from '@reduxjs/toolkit';
import {
  fetch_request_and_complaint_count_by_type,
} from '../actions/requestComplaintAction';

const initialState = {
  requests:{},
 complaints:{},
  loading: false,
  inProgress: false,
  error: null,
};

const requestAndComplaint = createSlice({
  name: 'requestAndComplaint',
  initialState,
  reducers: {
    updateService: (state, action) => {
      state.servicesList = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetch_request_and_complaint_count_by_type.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetch_request_and_complaint_count_by_type.fulfilled, (state, action) => {
        state.requests = action.payload?.data?.requests;
        state.complaints = action.payload?.data?.complaints;
        state.loading = false;
      })
      .addCase(fetch_request_and_complaint_count_by_type.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const {updateService} = requestAndComplaint.actions;
export default requestAndComplaint.reducer;
