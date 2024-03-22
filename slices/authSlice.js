import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

// create auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    profile: null,
  },

  reducers: {
    login: (state, action) => {
      state.userEmail = action.payload.email;
      state.token = action.payload.token;
      AsyncStorage.setItem('userEmail', action.payload.email);
      AsyncStorage.setItem('userToken', action.payload.token);
    },
    register: (state, action) => {
      state.userEmail = action.payload.email;
      state.token = action.payload.token;
      AsyncStorage.setItem('userEmail', action.payload.email);
      AsyncStorage.setItem('userToken', action.payload.token);
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    logout: (state, action) => {
      state.userEmail = null;
      state.token = null;
      state.profile = null;
      AsyncStorage.removeItem('userEmail');
      AsyncStorage.removeItem('userToken');
    },
  },
});

// export actions
export const { login, register, logout, setProfile } = authSlice.actions;

// export reducer
export default authSlice.reducer;
