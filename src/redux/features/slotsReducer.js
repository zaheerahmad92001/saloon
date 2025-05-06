import { createSlice } from '@reduxjs/toolkit';

const slotsSlice = createSlice({
  name: 'slots',
  initialState: {
    slotData: [],
  },
  reducers: {
    timeSlots: (state, action) => {
      state.slotData = action.payload;
    },
    removeSlots:(state, action) => {
        state.slotData = [];
      },
  },
});

export const { timeSlots } = slotsSlice.actions;
export default slotsSlice.reducer;
