import React from 'react';
import cn from 'classnames';
import styles from './TextField.module.scss';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	teaser?: boolean;
}

export default function TextField({ teaser = false, className, ...rest }: TextFieldProps) {
	return (
		<input
			className={cn(
				{
					[styles.teaser]: teaser,
					[styles.input]: !teaser,
				},
				className,
			)}
			{...rest}
		/>
	);
}
