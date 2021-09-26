import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.scss';
import { ReactComponent as PlayPauseIcon } from '../../../../assets/img/icons/play-and-pause-button.svg';
import Button from '../../../../components/Button';

const propTypes = {
	onTimerClick: PropTypes.func,
};

const Controls = ({onTimerClick}) => {

	return (
		<ul className={styles.Controls}>
			<li>
				<Button onClick={() => onTimerClick()}><PlayPauseIcon /></Button>
			</li>
		</ul>
	);
};

Controls.propTypes = propTypes;

export default Controls;