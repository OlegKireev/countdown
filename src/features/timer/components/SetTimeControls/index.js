import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Select from '../../../../components/Select';
import { setMilliseconds } from '../../store/timerSlice';
import styles from './SetTimeControls.module.scss';

const SetTimeControls = ({isWorking}) => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);

	const dispatch = useDispatch();

	const onSecondsSelectChange = (value) => {
		setSeconds(value);
	};

	const onMinutesSelectChange = (value) => {
		setMinutes(value);
	};

	useEffect(() => {
		dispatch(setMilliseconds(seconds * 1000 + minutes * 1000 * 60));
	}, [seconds, minutes]);

	const minutesItems = new Array(60).fill('').map((_,i) => i);
	const secondsItems = new Array(60).fill('').map((_,i) => i);


	return (
		<div className={cx(styles.SetTimeControls, isWorking && styles.isWorking)}>
			<div style={{display: 'flex'}}>
				<Select items={minutesItems} onChange={onMinutesSelectChange}/>
				<Select items={secondsItems} onChange={onSecondsSelectChange}/>
			</div>
		</div>);
};

SetTimeControls.propTypes = {
	isWorking: PropTypes.bool,
};

export default SetTimeControls;