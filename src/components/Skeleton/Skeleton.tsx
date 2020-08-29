import * as React from 'react';
import cn from 'classnames';
import styles from './Skeleton.module.scss';

export interface SkeletonProps {
	children?: React.ReactNode;
	variant?: 'text' | 'circular' | 'rectangular';
	width?: number;
	height?: number;
	className?: string;
}

export function Skeleton({ children, variant = 'text', width, height, className }: SkeletonProps) {
	return (
		<div
			className={cn(
				styles.wrapper,
				styles[variant],
				{
					[styles.withChildren]: !!children,
					[styles.fitContent]: !!children && !width,
					[styles.heightAuto]: !!children && !height,
				},
				className,
			)}
			style={{ width, height }}
		>
			{children}
		</div>
	);
}
