import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	seconds: PropTypes.number,
};

const Countdown = ({seconds}) => {
	return (
		<div>
			{seconds}
		</div>
	);
};

Countdown.propTypes = propTypes;

export default Countdown;