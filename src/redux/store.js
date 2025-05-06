import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './features/authSlice';
import profileReducer from './features/profileSlice';
import dashboardReducer from './features/homeSlice';
import professionalsReducer from './features/professionalsSlice';
import slotsReducer from './features/slotsReducer';
import serviceReducer from './features/serviceSlice';
import settingsReducer from './features/settingsSlice';
import requestAndComplaintReducer from './features/requestComplaintSlice';


const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['user'], // Only persist the `auth` slice
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);


 const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    profile: profileReducer,
    dashboard:dashboardReducer,
    professionals:professionalsReducer,
    slots:slotsReducer,
    services:serviceReducer,
    settings:settingsReducer,
    requestAndComplaint:requestAndComplaintReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// const persistor = persistStore(store);
const persistor = persistStore(store, null, () => {
  console.log('✅ Redux Persist: Rehydration Complete', store.getState());
});

export { store, persistor };
export const rootState = () => store.getState();
export const appDispatch = () => store.dispatch;
