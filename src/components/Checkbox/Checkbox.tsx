import React from 'react';
import cn from 'classnames';
import { Icon } from '..';
import styles from './Checkbox.module.scss';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export default function Checkbox({ className, label, ...rest }: CheckboxProps) {
	return (
		<label className={cn(styles.wrapper, className)}>
			<input className={styles.checkbox} type="checkbox" {...rest} />
			<Icon icon="check" className={styles.check} />
			{label && <span className={styles.label}>{label}</span>}
		</label>
	);
}
