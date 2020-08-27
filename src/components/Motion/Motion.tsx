import React from 'react';
import { animated, config, useTransition } from 'react-spring';
import { Checkbox, Avatar } from '..';
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

export function CheckboxExample() {
	const [checked, setChecked] = React.useState(false);

	React.useEffect(() => {
		const id = setInterval(() => {
			setChecked((prevChecked) => !prevChecked);
		}, 1000);
		return () => clearInterval(id);
	}, []);

	return <Checkbox checked={checked}>Checkbox label</Checkbox>;
}

function User({ name }) {
	return (
		<div>
			<Avatar name={name} />
		</div>
	);
}

const data = ['Rauno', 'Dan', 'Michael'];

export function Notifications() {
	const [users, setUsers] = React.useState(data);

	React.useEffect(() => {
		const id = setInterval(() => {
			setUsers((prevUsers) => {
				if (prevUsers.length !== 0) {
					return prevUsers.slice(0, prevUsers.length - 1);
				}
				return [...prevUsers, data.find((user) => !prevUsers.includes(user))];
			});
		}, 1000);
		return () => clearInterval(id);
	}, []);

	const transitions = useTransition(users, null, {
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
		config: config.gentle,
	});

	return (
		<div className={styles.users}>
			{transitions.map(
				({ item, props, key }) =>
					item && (
						<animated.div key={key} className={styles.box} style={props}>
							<User name={item} />
						</animated.div>
					),
			)}
		</div>
	);
}
