import * as React from 'react';
import cn from 'classnames';
import { Icon } from '..';
import styles from './Notification.module.scss';

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string;
	onAction?: () => void;
	actionLabel?: string;
	iconClassName?: string;
}

export default function Notification({
	children = 'Notification message',
	onAction,
	actionLabel,
	iconClassName,
	...rest
}: NotificationProps) {
	return (
		<div className={styles.wrapper} role="status" {...rest}>
			{children}
			{onAction && actionLabel ? (
				<span className={styles.action}>{actionLabel}</span>
			) : (
				<span className={cn(styles.icon, iconClassName)}>
					<Icon icon="close" />
				</span>
			)}
		</div>
	);
}

export function NotificationContainer({ children }) {
	const [expanded, setExpanded] = React.useState(false);
	return (
		<div className={styles.stacked} onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
			{React.Children.map(children, (child, index) => {
				const lastIndex = children.length - 1;
				return React.cloneElement(child, {
					style: {
						transform: expanded
							? 'translateY(0px) scale(1)'
							: `translateY(${(lastIndex - index) * 40}px) scale(${1 - (lastIndex - index) * 0.08})`,
					},
				});
			})}
		</div>
	);
}
