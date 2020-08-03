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
	const inputId = useId();
	const hintId = useId();
	return (
		<div className={styles.wrapper}>
			{label && <label htmlFor={inputId}>{label}</label>}
			<input
				id={inputId}
				aria-describedby={hintId}
				className={cn(
					{
						[styles.teaser]: teaser,
						[styles.input]: !teaser,
					},
					className,
				)}
				{...rest}
			/>
			{hint && <small id={hintId}>{hint}</small>}
		</div>
	);
}
