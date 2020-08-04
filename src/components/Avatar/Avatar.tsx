import React from 'react';
import cn from 'classnames';
import styles from './Avatar.module.scss';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	src?: string;
	size?: 'small' | 'large';
}

function getInitials(name: string) {
	const [firstName, lastName] = name.split(' ');
	return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}

export default function Avatar({ name, src, size = 'small', ...rest }: AvatarProps) {
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.large]: size === 'large',
				[styles.small]: size === 'small',
			})}
			{...rest}
		>
			<img src={src ? src : `https://avatar.tobi.sh/${name}`} alt={name} />
			{name && !src && <p className={styles.initials}>{getInitials(name)}</p>}
		</div>
	);
}
