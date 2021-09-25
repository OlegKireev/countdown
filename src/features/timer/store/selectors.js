export const selectMilliseconds = (state) => state.timer.milliseconds;
export const selectSettledMilliseconds = (state) => state.timer.settledMilliseconds;
export const selectIsExpired = (state) => state.timer.isExpired;
export const selectIsWorking = (state) => state.timer.isWorking;