import React from 'react';
import cn from 'classnames';
import styles from './Motion.module.scss';

export default function Motion() {
	return (
		<div className={styles.wrapper}>
			<div className={cn(styles.shape, styles.circle)} />
			<div className={cn(styles.shape, styles.rectangle)} />
			<div className={cn(styles.shape, styles.triangle)} />
		</div>
	);
}
