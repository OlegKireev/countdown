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
			const newSeconds = state.seconds + action.payload;
			return {
				...state,
				seconds: newSeconds,
				isExpired: newSeconds <= 0,
			};
		},
	},
});

export const {setSeconds, setIntervalInstance} = timerSlice.actions;

// export const startTimer = () => dispatch => {
// 	const interval = setInterval(() => {
// 		dispatch(setSeconds(-1));
// 	}, 1000);
// };

export default timerSlice.reducer;