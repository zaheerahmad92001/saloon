import {createSlice} from '@reduxjs/toolkit';
import {updateSalonProfile} from '../actions/profileAction'

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
    .addCase(updateSalonProfile.pending, state => {
            state.loading = true;
            state.error = null;
          })
          .addCase(updateSalonProfile.fulfilled, state => {
            state.loading = false;
          })
          .addCase(updateSalonProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
  },
});

export const {} = profileSlice.actions;
export default profileSlice.reducer;
