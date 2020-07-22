import React from 'react';
import styles from './TextField.module.scss';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	teaser?: boolean;
}

export default function TextField({ teaser = false, ...rest }: TextFieldProps) {
	return <input className={teaser ? styles.teaser : styles.input} {...rest} />;
}
