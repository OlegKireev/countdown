import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import timerReducer from '../features/timer/store/timerSlice';

export const store = configureStore({
	reducer: {
		counter : counterReducer,
		timer: timerReducer,
	}
});