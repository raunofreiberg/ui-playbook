import * as React from 'react';
import cn from 'classnames';
import styles from './Badge.module.scss';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	children: string | number;
}

export function Badge({ children, className, ...rest }: BadgeProps) {
	return (
		<span className={cn(styles.wrapper, className)} {...rest}>
			{Number(children) > 99 ? '99+' : children}
		</span>
	);
}
