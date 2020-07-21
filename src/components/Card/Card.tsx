import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { Icon, Notification, Button, TextField } from '..';
import styles from './Card.module.scss';

interface CardProps {
	name: string;
	teaser?: boolean;
}

// This is just whatever for now.
// Eventually, we'll just have _actual_ components for all of the previews.
function getPreview(name: string) {
	switch (name) {
		case 'notification':
			return <Notification />;
		case 'button':
			return <Button />;
		case 'TextField':
			return <TextField placeholder="Placeholder" readOnly />;
		default:
			return <Icon icon={name as any} style={name === 'tooltip' ? { marginTop: -27 } : undefined} />;
	}
}

export default function Card({ name, teaser = false }: CardProps) {
	if (teaser) {
		return (
			<li className={styles.ribbonWrapper}>
				<div className={cn(styles.wrapper, styles.teaser)}>
					<div className={styles.heading}>
						<h3>{name}</h3>
					</div>
					<div className={styles.body}>{getPreview(name)}</div>
				</div>
				<div className={cn(styles.ribbon)}>
					<span>upcoming</span>
				</div>
			</li>
		);
	}

	return (
		<Link href={`play/${name}`}>
			<a className={styles.link}>
				<li className={styles.wrapper}>
					<div className={styles.heading}>
						<h3>{name}</h3>
					</div>
					<div className={styles.body}>{getPreview(name)}</div>
				</li>
			</a>
		</Link>
	);
}
