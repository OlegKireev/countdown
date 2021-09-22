import React, { useState, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import Countdown from './components/Countdown';
import { selectIsExpired, selectSeconds } from './store/selectors';
import { setSeconds } from './store/timerSlice';


const Timer = () => {
	const seconds = useSelector(selectSeconds);
	const isExpired = useSelector(selectIsExpired);

	const dispatch = useDispatch();
	const [intervalId, setIntervalId] = useState(null);

	const startTimer = () => {
		setIntervalId(setInterval(() => {
			dispatch(setSeconds(-1));
		}, 1000));
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
		<div>
			<Countdown seconds={seconds}/>
			<button onClick={() => dispatch(setSeconds(5))}>+5 sec</button>
			<button onClick={() => startTimer()}>Start</button>
		</div>
	);
};

export default Timer;