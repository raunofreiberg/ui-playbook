import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
}

export default function Button({ children = 'Submit', className, ...rest }: ButtonProps) {
	return (
		<button className={cn(styles.wrapper, className)} {...rest}>
			{children}
		</button>
	);
}
