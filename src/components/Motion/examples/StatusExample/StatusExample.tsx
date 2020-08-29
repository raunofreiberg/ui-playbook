import React from 'react';
import { Icon } from '../../..';
import styles from './StatusExample.module.scss';

export function StatusExample() {
	return (
		<div className={styles.status}>
			<Icon icon="bell" />
			<span className={styles.indicator} />
		</div>
	);
}
