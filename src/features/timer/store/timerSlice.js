import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	settledMilliSeconds: 5000,
	milliseconds: 5000,
	isExpired: false,
	isWorking: false,
};

export const timerSlice = createSlice({
	name: 'timer',
	initialState,
	reducers: {
		setMilliseconds: (state, action) => {
			return {
				...state,
				settledMilliSeconds: action.payload,
				milliseconds: action.payload,
				isExpired: false,
			};
		},
		stepTimer: (state) => {
			return {
				...state,
				milliseconds: state.milliseconds - 10,
				isExpired: state.milliseconds - 10  <= 0,
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

export const {setMilliseconds, stepTimer, setIsWorking} = timerSlice.actions;

export default timerSlice.reducer;