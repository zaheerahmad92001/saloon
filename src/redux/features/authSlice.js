import {createSlice} from '@reduxjs/toolkit';
import {loginUser, registerUser} from '../actions/authActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storagekeys} from '../../staticData';

const initialState = {
  user: null,
  appIntroCompleted: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      AsyncStorage.removeItem(storagekeys.authToken);
      AsyncStorage.removeItem(storagekeys.refreshToken);
    },
    updateUser: (state, action) => {
      if (state.user) {
        state.user = {...state.user, ...action.payload};
      }
    },
    setAppIntroCompleted: state => {
      state.appIntroCompleted = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, state => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // ✅ Ensure user is saved correctly
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {logout, setAppIntroCompleted , updateUser} = authSlice.actions;
export default authSlice.reducer;
