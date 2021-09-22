import React from 'react';
import './theme/theme.scss';
import styles from './App.module.scss';

import Timer from './features/timer';

function App() {
	return (
		<div className={styles.App}>
			<div className={styles.AppContainer}>
				<Timer/>
			</div>
		</div>
	);
}

export default App;
