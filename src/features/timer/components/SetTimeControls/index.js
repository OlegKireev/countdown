import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Select from '../../../../components/Select';
import { setMilliseconds } from '../../store/timerSlice';
import styles from './SetTimeControls.module.scss';

const SetTimeControls = ({isWorking}) => {
	const dispatch = useDispatch();

	const onSelectChange = (value) => {
		dispatch(setMilliseconds(value  * 1000));
	};

	const seconds = new Array(60).fill('').map((_,i) => i);

	return (
		<div className={cx(styles.SetTimeControls, isWorking && styles.isWorking)}>
			<div style={{display: 'flex'}}>
				<Select items={seconds} onChange={onSelectChange}/>				
			</div>
		</div>);
};

SetTimeControls.propTypes = {
	isWorking: PropTypes.bool,
};

export default SetTimeControls;