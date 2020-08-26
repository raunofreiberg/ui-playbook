// @ts-nocheck
import React from 'react';
import cn from 'classnames';
import { Avatar, Icon } from '../index';
import styles from './Motion.module.scss';

export default function Motion() {
	return (
		<div className={styles.wrapper}>
			<div className={cn(styles.motion, styles.circle)} />
			<div className={cn(styles.motion, styles.rectangle)} />
			<div className={cn(styles.motion, styles.triangle)} />
		</div>
	);
}
