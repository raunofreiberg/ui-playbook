import React from 'react';
import styles from './Button.module.scss';

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button className={styles.wrapper} {...props}>
			Submit
		</button>
	);
}
