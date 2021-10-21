import * as React from 'react';
import styles from './Popover.module.scss';
import { Icon } from '../index';

interface PopoverProps {
	teaser?: boolean;
}

export default function Popover({ teaser = false }: PopoverProps) {
	if (teaser) {
		return (
			<div className={styles.wrapper}>
				<div className={styles.popover}>
					<button tabIndex={-1} aria-label="Edit" title="Edit">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path
								d="M13.6691 6.94923L7.29591 13.6872C7.10702 13.8869 6.84428 14 6.56941 14L3.66668 14C3.11439 14 2.66668 13.5523 2.66668 13L2.66668 10.0717C2.66668 9.81193 2.76774 9.56238 2.94848 9.37583L9.38784 2.72966C9.77214 2.33301 10.4052 2.323 10.8019 2.70731C10.8057 2.71097 10.8094 2.71467 10.8131 2.71839L13.6497 5.55496C14.0326 5.93782 14.0412 6.55587 13.6691 6.94923Z"
								fill="currentColor"
							/>
						</svg>
					</button>
					<button tabIndex={-1} aria-label="Duplicate" title="Duplicate">
						<Icon icon="duplicate" />
					</button>
					<button tabIndex={-1} aria-label="Delete" title="Delete">
						<Icon icon="trash" />
					</button>
				</div>
				<div className={styles.trigger} />
			</div>
		);
	}
	// TODO.
	return null;
}
