import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export default function Button({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button className={cn(styles.wrapper, className)} {...rest}>
			Submit
		</button>
	);
}
