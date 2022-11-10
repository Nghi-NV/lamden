/**
 * Created by nghinv on Wed Nov 02 2022
 */

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
