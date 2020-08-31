import * as React from 'react';
import { useId } from '@reach/auto-id';
import cn from 'classnames';
import Icon, { Icons } from '../Icon/Icon';
import styles from './TextField.module.scss';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	hint?: string;
	error?: string;
	teaser?: boolean;
	inline?: boolean;
	optional?: boolean;
	icon?: Icons;
}

export default function TextField({
	label,
	hint,
	error,
	teaser = false,
	inline = false,
	required = false,
	optional = false,
	icon,
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
						[styles.error]: error,
						[styles.icon]: icon,
					},
					className,
				)}
				required={required && !optional}
				{...rest}
			/>
			{icon && <Icon icon={icon} className={styles.icon} />}
			{(hint || error) && <small id={metaId}>{error || hint}</small>}
		</div>
	);
}
