import React from 'react';
import styles from './TextField.module.scss';

export default function TextField(props: React.InputHTMLAttributes<HTMLInputElement>) {
	return <input type="text" className={styles.wrapper} {...props} />;
}
