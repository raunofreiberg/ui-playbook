import React from 'react';
import { Icon } from '..';
import styles from './Notification.module.scss';

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string;
	onAction?: () => void;
	actionLabel?: string;
}

export default function Notification({
	children = 'Notification message',
	onAction,
	actionLabel,
	...rest
}: NotificationProps) {
	return (
		<div className={styles.wrapper} role="status" {...rest}>
			{children}
			{onAction && actionLabel ? <span className={styles.action}>{actionLabel}</span> : <Icon icon="close" />}
		</div>
	);
}

export function NotificationContainer({ children }) {
	const [expanded, setExpanded] = React.useState(false);

	return (
		<div className={styles.stacked} onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
			{React.Children.map(children, (child, index) => {
				return React.cloneElement(child, {
					style: {
						transform: expanded
							? 'translateY(0px) scale(1)'
							: `translateY(${(children.length - 1 - index) * 40}px) scale(${
									index === children.length - 1 ? 1 : 1 - (children.length - 1 - index) * 0.08
							  })`,
					},
				});
			})}
		</div>
	);
}
