import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSeconds } from '../../store/timerSlice';
import styles from './Controls.module.scss';
import { ReactComponent as PlayPauseIcon } from '../../../../assets/img/icons/play-and-pause-button.svg';
import Button from '../../../../components/Button';

const propTypes = {
	onTimerClick: PropTypes.func,
};

const Controls = ({onTimerClick}) => {
	const dispatch = useDispatch();

	return (
		<ul className={styles.Controls}>
			<li>
				<Button onClick={() => dispatch(setSeconds(5))}>+5</Button>
			</li>
			<li>
				<Button onClick={() => onTimerClick()}><PlayPauseIcon /></Button>
			</li>
		</ul>
	);
};

Controls.propTypes = propTypes;

export default Controls;