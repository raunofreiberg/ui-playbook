import * as React from 'react';
import cn from 'classnames';
import { animated, config, useTransition } from 'react-spring';
import { Notification } from '../../..';
import styles from './NotificationExample.module.scss';

export function NotificationExample({ animate = true }) {
	const [isOpen, setIsOpen] = React.useState(true);
	const [ripple, setRipple] = React.useState(false);

	React.useEffect(() => {
		const id = setInterval(() => {
			setRipple((prevRipple) => !prevRipple);
			setTimeout(() => {
				setIsOpen((prevIsOpen) => !prevIsOpen);
			}, 500);
		}, 1000);
		return () => clearInterval(id);
	}, []);

	const transitions = useTransition(isOpen, null, {
		immediate: !animate,
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
		<div className={styles.wrapper}>
			{transitions.map(
				({ item, props, key }) =>
					item && (
						<animated.div key={key} style={props}>
							<Notification iconClassName={cn(styles.close, ripple && styles.ripple)}>
								Notification message
							</Notification>
						</animated.div>
					),
			)}
		</div>
	);
}
