import React from 'react';
import { useId } from '@reach/auto-id';
import cn from 'classnames';
import styles from './TextField.module.scss';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	hint?: string;
	error?: string;
	teaser?: boolean;
	focused?: boolean;
	inline?: boolean;
	optional?: boolean;
}

export default function TextField({
	label,
	hint,
	error,
	teaser = false,
	focused = false,
	inline = false,
	required = false,
	optional = false,
	className,
	...rest
}: TextFieldProps) {
	const inputId = useId();
	const metaId = useId();
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.inline]: inline,
			})}
		>
			{label && (
				<label htmlFor={inputId}>
					{label}
					{required && !optional && <span className={styles.required}>*</span>}
					{!required && optional && <span className={styles.optional}>(Optional)</span>}
				</label>
			)}
			<input
				id={inputId}
				aria-describedby={metaId}
				aria-invalid={!!error}
				className={cn(
					{
						[styles.teaser]: teaser,
						[styles.input]: !teaser,
						[styles.focused]: focused,
						[styles.error]: error,
					},
					className,
				)}
				required={required && !optional}
				{...rest}
			/>
			{(hint || error) && <small id={metaId}>{error || hint}</small>}
		</div>
	);
}
