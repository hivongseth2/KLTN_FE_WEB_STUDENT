import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

const parseUser = () => {
  try {
    return JSON.parse(Cookies.get('user'));
  } catch (err) {
    return null;
  }
};

const getMode = () => {
  if (localStorage.getItem('mode')) {
    return localStorage.getItem('mode');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const initialState = {
  user: parseUser(),
  mode: getMode(),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload;
      const payload = jwtDecode(token);
      const user = {
        Id: payload?.id,
        username: payload?.username,
      };
      state.user = user;
      state.token = token;
      console.log('userSlice', action);
      Cookies.set('user', JSON.stringify(action.payload), { secure: true });
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove('user');
    },
    setToken: (state, action) => {
      const token = action.payload.access;
      state.token = token;
    },
    changeMode: (state) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
        localStorage.setItem('mode', 'dark');
      } else {
        state.mode = 'light';
        localStorage.setItem('mode', 'light');
      }
    },
  },
});

export const { setCredentials, logOut, setToken, changeMode } =
  userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectToken = (state) => state.user.token;

export const selectMode = (state) => state.user.mode;

export default userSlice.reducer;
