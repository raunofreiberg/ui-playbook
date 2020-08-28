import React from 'react';
import { animated, config, useTransition } from 'react-spring';
import { Button, Status, Notification, Icon } from '..';
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

export function ButtonExample() {
	const [hover, setHover] = React.useState(false);

	React.useEffect(() => {
		const id = setInterval(() => {
			setHover((prevHover) => !prevHover);
		}, 1000);
		return () => clearInterval(id);
	}, []);

	return (
		<Button tabIndex={-1} hover={hover} style={{ minWidth: 100, marginBottom: 24 }}>
			Label
		</Button>
	);
}

export function NotificationExample() {
	const [isOpen, setIsOpen] = React.useState(true);

	React.useEffect(() => {
		const id = setInterval(() => {
			setIsOpen((prevIsOpen) => !prevIsOpen);
		}, 1000);
		return () => clearInterval(id);
	}, []);

	const transitions = useTransition(isOpen, null, {
		from: {
			opacity: 0,
			transform: 'translateX(-40px)',
		},
		enter: {
			opacity: 1,
			transform: 'translateX(0)',
		},
		leave: {
			opacity: 0,
			transform: 'translateX(-40px)',
		},
		config: config.stiff,
	});

	return (
		<div className={styles.notifications}>
			{transitions.map(
				({ item, props, key }) =>
					item && (
						<animated.div key={key} style={props}>
							<Notification>Notification message</Notification>
						</animated.div>
					),
			)}
		</div>
	);
}

export function StatusExample() {
	return (
		<div className={styles.status}>
			<Icon icon="bell" />
			<span className={styles.indicator} />
		</div>
	);
}

export function SVGExample() {
	return (
		<svg width="120" height="120" viewBox="0 0 35 35" fill="none" className={styles.modulz}>
			<path id={styles['triangle-1']} d="M10 26.5L4 31V22L10 26.5Z" strokeWidth="0.5" fill="none" />
			<path id={styles['triangle-3']} d="M10 14.5L4 19V10L10 14.5Z" strokeWidth="0.5" fill="none" />
			<path id={styles['triangle-5']} d="M17 8.5L11 13V4L17 8.5Z" strokeWidth="0.5" fill="none" />
			<path d="M24 14.5L18 19V10L24 14.5Z" strokeWidth="0.5" fill="none" id={styles['triangle-7']} />
			<path d="M31 8.5L25 13V4L31 8.5Z" strokeWidth="0.5" fill="none" id={styles['triangle-9']} />
			<path d="M31 20.5L25 25V16L31 20.5Z" strokeWidth="0.5" fill="none" id={styles['triangle-11']} />
			<path id={styles['triangle-2']} d="M10 25L4 20.5L10 16V25Z" strokeWidth="0.5" fill="none" />
			<path d="M17 19L11 14.5L17 10V19Z" strokeWidth="0.5" fill="none" id={styles['triangle-6']} />
			<path d="M10 13L4 8.5L10 4V13Z" strokeWidth="0.5" fill="none" id={styles['triangle-4']} />
			<path d="M24 13L18 8.5L24 4V13Z" strokeWidth="0.5" fill="none" id={styles['triangle-8']} />
			<path d="M31 19L25 14.5L31 10V19Z" strokeWidth="0.5" fill="none" id={styles['triangle-10']} />
			<path d="M31 31L25 26.5L31 22V31Z" strokeWidth="0.5" fill="none" id={styles['triangle-12']} />
		</svg>
	);
}
