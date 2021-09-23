import React from 'react';
import PropTypes from 'prop-types';
import styles from './CircularProgressBar.module.scss';

const CircularProgressBar = ({sqSize = 200, strokeWidth = 10, percentage = 25}) => {
	// SVG centers the stroke width on the radius, subtract out so circle fits in square
	const radius = (sqSize - strokeWidth) / 2;
	// Enclose cicle in a circumscribing square
	const viewBox = `0 0 ${sqSize} ${sqSize}`;
	// Arc length at 100% coverage is the circle circumference
	const dashArray = radius * Math.PI * 2;
	// Scale 100% coverage overlay with the actual percent
	const dashOffset = dashArray - dashArray * percentage / 100;

	return (
		<svg
			className={styles.CircularProgressBar}
			width={sqSize}
			height={sqSize}
			viewBox={viewBox}>
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
				{`${percentage}%`}
			</text>
		</svg>
	);
};

CircularProgressBar.propTypes = {
	sqSize: PropTypes.number,
	percentage: PropTypes.number,
	strokeWidth: PropTypes.number,
};

export default CircularProgressBar;