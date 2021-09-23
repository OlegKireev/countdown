import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
				seconds: action.payload,
				isExpired: action.payload <= 0,
			};
		},
		stepTimer: (state) => {
			return {
				seconds: state.seconds - 1,
				isExpired: state.seconds  <= 1,
			};
		}
	},
});

export const {setSeconds, stepTimer} = timerSlice.actions;

export default timerSlice.reducer;