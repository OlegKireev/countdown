import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Countdown.module.scss';

const propTypes = {
	seconds: PropTypes.number.isRequired,
};

const Countdown = ({seconds}) => {
	return (
		<div className={cx(styles.Countdown)}>
			<span>{seconds < 10 && 0}{seconds}</span>
		</div>
	);
};

Countdown.propTypes = propTypes;

export default Countdown;