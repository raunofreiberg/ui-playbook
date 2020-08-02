import React from 'react';
import { useId } from '@reach/auto-id';
import cn from 'classnames';
import styles from './TextField.module.scss';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	hint?: string;
	teaser?: boolean;
}

export default function TextField({ label, hint, teaser = false, className, ...rest }: TextFieldProps) {
	const id = useId();
	return (
		<div className={styles.wrapper}>
			{label && <label htmlFor={id}>{label}</label>}
			<input
				id={id}
				className={cn(
					{
						[styles.teaser]: teaser,
						[styles.input]: !teaser,
					},
					className,
				)}
				{...rest}
			/>
			{hint && <small>{hint}</small>}
		</div>
	);
}
