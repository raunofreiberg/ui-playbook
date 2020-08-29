import React from 'react';
import { animated, config, useTransition } from 'react-spring';
import { Button, TextField, Notification, Icon, Skeleton } from '..';
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
