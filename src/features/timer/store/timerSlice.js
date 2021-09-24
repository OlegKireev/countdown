import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	settledSeconds: 0,
	seconds: 5,
	isExpired: false,
	isWorking: false,
};

export const timerSlice = createSlice({
	name: 'timer',
	initialState,
	reducers: {
		setSeconds: (state, action) => {
			return {
				...state,
				settledSeconds: action.payload,
				seconds: action.payload,
				isExpired: false,
			};
		},
		stepTimer: (state) => {
			return {
				...state,
				seconds: state.seconds - 1,
				isExpired: state.seconds - 1  <= 0,
			};
		},
		setIsWorking: (state, action) => {
			return {
				...state,
				isWorking: action.payload,
			};
		}
	},
});

export const {setSeconds, stepTimer, setIsWorking} = timerSlice.actions;

export default timerSlice.reducer;