import React from 'react';
import cn from 'classnames';
import { Skeleton, Avatar } from '../../..';
import styles from './SkeletonExample.module.scss';

function SkeletonUser({ name, date, loading }: { name: string; date: string; loading: boolean }) {
	return (
		<div className={styles.user}>
			{loading && <Skeleton width={40} height={40} variant="circular" />}
			<Avatar name={name} className={styles.avatar} style={{ display: loading ? 'none' : 'initial' }} />
			<div className={styles.meta}>
				{loading ? (
					<>
						<Skeleton width={100} height={10} className={styles.name} />
						<Skeleton width={80} height={10} />
					</>
				) : (
					<>
						<p className={styles.name}>{name}</p>
						<small className={styles.date}>{date}</small>
					</>
				)}
			</div>
		</div>
	);
}

const initialUsers = [
	{
		name: 'Rauno Freiberg',
		date: 'July 14th, 1996',
		loading: true,
	},
	{
		name: 'Thomas Shelby',
		date: 'April 4th, 1972',
		loading: true,
	},
	{
		name: 'Michael Jordan',
		date: 'June 17th, 1956',
		loading: true,
	},
];

export function SkeletonExample() {
	const [users, setUsers] = React.useState(initialUsers);

	React.useEffect(() => {
		let current = 0;

		const id = setInterval(() => {
			setUsers((prevUsers) => {
				if (prevUsers.every((user) => !user.loading)) {
					current = 0;
					return initialUsers;
				}

				const newUsers = prevUsers.map((user, index) => {
					if (index === current) {
						return {
							...user,
							loading: false,
						};
					}
					return user;
				});
				current++;
				return newUsers;
			});
		}, 1000);

		return () => {
			clearInterval(id);
		};
	}, []);

	return (
		<div className={styles.wrapper}>
			{users.map((user) => (
				<SkeletonUser key={user.name} {...user} />
			))}
		</div>
	);
}
