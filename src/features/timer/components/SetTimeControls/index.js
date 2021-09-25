import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setMilliseconds } from '../../store/timerSlice';
import styles from './SetTimeControls.module.scss';

const SetTimeControls = () => {
	const [secondsValue, setSecondsValue] = useState(0);
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(setMilliseconds(secondsValue  * 1000));
	};
	return (
		<form className={styles.SetTimeControls} onSubmit={onSubmit}>
			<input type='number' value={secondsValue} onChange={(e) => setSecondsValue(+e.target.value)}/>
		</form>);
};

export default SetTimeControls;