import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	settledSeconds: 0,
	seconds: 5,
	isExpired: false,
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
				seconds: state.seconds - 1,
				isExpired: state.seconds - 1  <= 0,
			};
		}
	},
});

export const {setSeconds, stepTimer} = timerSlice.actions;

export default timerSlice.reducer;