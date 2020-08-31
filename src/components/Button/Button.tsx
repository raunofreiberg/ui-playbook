import * as React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	hover?: boolean;
}

export default function Button({ children = 'Submit', className, hover, ...rest }: ButtonProps) {
	return (
		<button className={cn(styles.wrapper, hover && styles.hover, className)} {...rest}>
			{children}
		</button>
	);
}
