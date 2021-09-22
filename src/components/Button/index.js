import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.scss';

const propsTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node,
	submit: PropTypes.bool,
};

const Button = ({className, onClick, children, submit}) => {
	return (
		<button
			type={submit ? 'submit' : 'button'}
			className={cx(className, styles.Button)}
			onClick={() => onClick()}
		>
			{children}
		</button>
	);
};

Button.propTypes = propsTypes;

export default Button;