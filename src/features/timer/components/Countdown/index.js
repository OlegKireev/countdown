import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Countdown.module.scss';
import CircularProgressBar from '../CircularProgressBar';

const propTypes = {
	seconds: PropTypes.number.isRequired,
	percents: PropTypes.number.isRequired,
};

const Countdown = ({seconds, percents}) => {
	return (
		<div className={cx(styles.Countdown)}>
			<CircularProgressBar percents={percents} value={seconds}/>
		</div>
	);
};

Countdown.propTypes = propTypes;

export default Countdown;