import React from 'react';
import { useDispatch } from 'react-redux';
import Select from '../../../../components/Select';
import { setMilliseconds } from '../../store/timerSlice';
import styles from './SetTimeControls.module.scss';

const SetTimeControls = () => {
	const dispatch = useDispatch();

	const onSelectChange = (value) => {
		dispatch(setMilliseconds(value  * 1000));
	};

	const seconds = new Array(60).fill('').map((_,i) => i);

	return (
		<div className={styles.SetTimeControls}>
			<div style={{display: 'flex'}}>
				<Select items={seconds} onChange={onSelectChange}/>				
			</div>
		</div>);
};

export default SetTimeControls;