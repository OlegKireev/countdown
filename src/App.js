import React from 'react';
import './theme/theme.scss';
import styles from './App.module.scss';
import cx from 'classnames';

import Timer from './features/timer';

function App() {
	return (
		<div className={cx(styles.App)}>
			<Timer/>
		</div>
	);
}

export default App;
