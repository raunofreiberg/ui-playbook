import * as React from 'react';
import { Icon } from '..';
import styles from './Title.module.scss';

interface TitleProps {
	children: string;
}

export default function Title({ children }: TitleProps) {
	const label = 'Edit this page on Github';
	return (
		<div className={styles.wrapper}>
			<h1>{children}</h1>
			<a
				className={styles.edit}
				href={`https://github.com/raunofreiberg/ui-playbook/edit/master/src/pages/play/${children.toLowerCase()}.mdx`}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={label}
				title={label}
			>
				<Icon icon="edit" />
			</a>
		</div>
	);
}
