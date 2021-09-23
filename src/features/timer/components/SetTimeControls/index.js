import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setSeconds } from '../../store/timerSlice';
import styles from './SetTimeControls.module.scss';

const SetTimeControls = () => {
	const [secondsValue, setSecondsValue] = useState(0);
	const dispatch = useDispatch();
		
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(setSeconds(secondsValue));
	};
	return (
		<form className={styles.SetTimeControls} onSubmit={onSubmit}>
			<input type='number' value={secondsValue} onChange={(e) => setSecondsValue(+e.target.value)}/>
		</form>);
};

export default SetTimeControls;