import React from 'react';
import PropTypes from 'prop-types';
import styles from './CircularProgressBar.module.scss';

const CircularProgressBar = ({sqSize = 200, strokeWidth = 10, percents = 100, value = 0}) => {
	// SVG centers the stroke width on the radius, subtract out so circle fits in square
	const radius = (sqSize - strokeWidth) / 2;
	// Enclose cicle in a circumscribing square
	const viewBox = `0 0 ${sqSize} ${sqSize}`;
	// Arc length at 100% coverage is the circle circumference
	const dashArray = radius * Math.PI * 2;
	// Scale 100% coverage overlay with the actual percents
	const percentage = isNaN(percents) ? 100 : percents;
	const dashOffset = dashArray + dashArray * percentage / 100;

	return (
		<svg
			className={styles.CircularProgressBar}
			width={sqSize}
			height={sqSize}
			viewBox={viewBox}>
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor="#00bc9b" />
					<stop offset="100%" stopColor="#5eaefd" />
				</linearGradient>
			</defs>
			<circle
				className={styles.circleBackground}
				cx={sqSize / 2}
				cy={sqSize / 2}
				r={radius}
				strokeWidth={`${strokeWidth}px`} />
			<circle
				className={styles.circleProgress}
				cx={sqSize / 2}
				cy={sqSize / 2}
				r={radius}
				strokeWidth={`${strokeWidth}px`}
				// Start progress marker at 12 O'Clock
				transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
				style={{
					strokeDasharray: dashArray,
					strokeDashoffset: dashOffset
				}} />
			<text
				className={styles.circleText}
				x="50%"
				y="50%"
				dy=".3em"
				textAnchor="middle">
				{value < 10 ? `0${value}` : value}
			</text>
		</svg>
	);
};

CircularProgressBar.propTypes = {
	sqSize: PropTypes.number,
	percents: PropTypes.number,
	strokeWidth: PropTypes.number,
	value: PropTypes.number,
};

export default CircularProgressBar;