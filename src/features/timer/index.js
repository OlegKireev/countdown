import React, { useState, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { selectIsExpired, selectMilliseconds, selectSettledMilliseconds } from './store/selectors';
import { setIsWorking, stepTimer } from './store/timerSlice';
import SetTimeControls from './components/SetTimeControls';
import Controls from './components/Controls';
import Countdown from './components/Countdown';
import { Howl } from 'howler';

const Timer = () => {
	const milliseconds = useSelector(selectMilliseconds);
	const settledMilliseconds = useSelector(selectSettledMilliseconds);
	const isExpired = useSelector(selectIsExpired);
	const dispatch = useDispatch();
	
	const seconds = Math.ceil(milliseconds / 1000);
	const percents = milliseconds/settledMilliseconds * 100;

	const [intervalId, setIntervalId] = useState(null);

	const finishSound = new Howl({
		src: ['./sounds/alarm.mp3', './sounds/alarm.wav']
	});

	
	const pauseTimer = () => {
		clearInterval(intervalId);
		dispatch(setIsWorking(false));
		setIntervalId(null);
	};


	const startTimer = () => {
		let start = milliseconds === settledMilliseconds
			? Date.now()
			: Date.now() - settledMilliseconds + milliseconds;

		dispatch(setIsWorking(true));
			
		setIntervalId(setInterval(() => {
			const delta = Date.now() - start;
			dispatch(stepTimer(delta));
		}, 100));
	};

	const onTimerClick = () => {
		if (intervalId && !isExpired) {
			pauseTimer();
		} else {
			startTimer();
		}
	};

	useEffect(() => {
		if (intervalId && isExpired) {
			console.log('Ring-ring');
			
			finishSound.play();
			pauseTimer();
		}
	}, [intervalId, isExpired]);


	/* componentWillUnmout simulation */
	useEffect(() => {
		return () => clearInterval(intervalId);
	}, []);


	return (
		<>
			<Countdown seconds={seconds} percents={percents}/>
			<Controls onTimerClick={onTimerClick} />
			<SetTimeControls />
		</>
	);
};

export default Timer;