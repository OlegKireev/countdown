import { configureStore } from '@reduxjs/toolkit';
import timerReducer from '../features/timer/store/timerSlice';

export const store = configureStore({
	reducer: {
		timer: timerReducer,
	}
});