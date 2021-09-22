import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSeconds } from '../../store/timerSlice';
import styles from './Controls.module.scss';
import { ReactComponent as PlayPauseIcon } from '../../../../assets/img/icons/play-and-pause-button.svg';

const propTypes = {
	onTimerClick: PropTypes.func,
};

const Controls = ({onTimerClick}) => {
	const dispatch = useDispatch();

	return (
		<ul className={styles.Controls}>
			<li>
				<button onClick={() => dispatch(setSeconds(5))}>+5 sec</button>
			</li>
			<li>
				<button className={styles.PlayButton} onClick={() => onTimerClick()}><PlayPauseIcon /></button>
			</li>
		</ul>
	);
};

Controls.propTypes = propTypes;

export default Controls;