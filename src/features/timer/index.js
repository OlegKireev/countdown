import React, { useState, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
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
		<section>
			<h1>Interval Timer</h1>
			<p>{seconds} seconds</p>
			<button onClick={() => dispatch(setSeconds(5))}>+5 sec</button>
			<button onClick={() => startTimer()}>Start</button>
		</section>
	);
};

export default Timer;