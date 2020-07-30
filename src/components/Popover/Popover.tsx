import React from 'react';
import styles from './Popover.module.scss';

interface PopoverProps {
	teaser?: boolean;
}

export default function Popover({ teaser = false }: PopoverProps) {
	if (teaser) {
		return (
			<div className={styles.wrapper}>
				<div className={styles.popover}>Popover content</div>
				<div className={styles.trigger} />
			</div>
		);
	}
	// TODO.
	return null;
}
