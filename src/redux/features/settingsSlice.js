import {createSlice} from '@reduxjs/toolkit';
import {fetchTermsAndPrivacyPolicy ,addSettingsByType ,fetchSettingByType} from '../actions/settingsAction';
import {offDays, settingsEnum} from '../../staticData';
import { convertStringToArray } from '../../functions';

const initialState = {
  privacyPolicy: {},
  termsAndCondition: {},
  offDaysList:[],
  notificationSettings:[],
  accessAbilitySettings:[],
  defaultLanguage:'English',
  loading: false,
  inProgress: false,
  error: null,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTermsAndPrivacyPolicy.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTermsAndPrivacyPolicy.fulfilled, (state, action) => {
        if (action.payload.type === settingsEnum.PrivacyPolicy) {
          state.privacyPolicy = action.payload.data;
        } else if (action.payload.type === settingsEnum.TermsAndCondition) {
          state.termsAndCondition = action.payload.data;
        }
        state.loading = false;
      })
      .addCase(fetchTermsAndPrivacyPolicy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  // adding settngs
      .addCase(addSettingsByType.pending, state => {
        state.inProgress = true;
        state.error = null;
      })
      .addCase(addSettingsByType.fulfilled, (state, action) => {
        state.inProgress = false;
      })
      .addCase(addSettingsByType.rejected, (state, action) => {
        state.inProgress = false;
        state.error = action.payload;
      })

      // fetching settngs
      .addCase(fetchSettingByType.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSettingByType.fulfilled, (state, action) => {
        if(action.payload.type === settingsEnum.OffDays){
          const convertIntoArray = convertStringToArray(action?.payload?.data?.days);
          state.offDaysList = convertIntoArray;
        }else if(action.payload.type === settingsEnum.NotificationSettings){
          state.notificationSettings = action?.payload?.data;
        }else if(action.payload.type === settingsEnum.AccessibilitySettings){
          state.accessAbilitySettings = action.payload.data;
        }else if(action.payload.type === settingsEnum.Language){
          state.defaultLanguage = action.payload.data.language;
        }
        state.loading = false;
      })
      .addCase(fetchSettingByType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const {updateService} = settingsSlice.actions;
export default settingsSlice.reducer;
