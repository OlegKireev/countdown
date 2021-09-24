import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsWorking } from './features/timer/store/selectors';
import cx from 'classnames';
import styles from './App.module.scss';
import './theme/theme.scss';

import Timer from './features/timer';

function App() {
	const isTimerActive = useSelector(selectIsWorking);

	return (
		<div className={cx(styles.App, isTimerActive && styles.active)}>
			<div className={styles.AppContainer}>
				<Timer/>
			</div>
		</div>
	);
}

export default App;
