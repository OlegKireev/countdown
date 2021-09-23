import React, { useState, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import Countdown from './components/Countdown';
import Controls from './components/Controls';
import { selectIsExpired, selectSeconds } from './store/selectors';
import { stepTimer } from './store/timerSlice';
import SetTimeControls from './components/SetTimeControls';

const Timer = () => {
	const seconds = useSelector(selectSeconds);
	const isExpired = useSelector(selectIsExpired);

	const dispatch = useDispatch();
	const [intervalId, setIntervalId] = useState(null);

	const isCountdowning = intervalId && !isExpired;

	const onTimerClick = () => {
		if (isCountdowning) {
			clearInterval(intervalId);
			setIntervalId(null);
		} else {
			setIntervalId(setInterval(() => {
				dispatch(stepTimer());
			}, 1000));
		}
	};

	if (isExpired) {
		console.log('Ring-ring');
		clearInterval(intervalId);
	}

	/* componentWillUnmout simulation */
	useEffect(() => {
		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<Countdown seconds={seconds}/>
			<Controls onTimerClick={onTimerClick} />
			<SetTimeControls />
		</>
	);
};

export default Timer;