import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	settledMilliseconds: 5000,
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
				settledMilliseconds: action.payload,
				milliseconds: action.payload,
				isExpired: false,
			};
		},
		stepTimer: (state, action) => {
			if (action.payload) {
				return {
					...state,
					milliseconds: state.settledMilliseconds - action.payload,
					isExpired: state.milliseconds - 100 <= 0,
				};
			}
			return {
				...state,
				milliseconds: state.milliseconds - 100,
				isExpired: state.milliseconds - 100  <= 0,
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