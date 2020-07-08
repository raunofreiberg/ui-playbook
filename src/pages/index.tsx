import React from 'react';
import { Card } from '../components';
import styles from './index.module.scss';

const components = [
	{
		name: 'tooltip',
		teaser: false,
	},
	{
		name: 'button',
		teaser: true,
	},
];

export default function Home() {
	const [query, setQuery] = React.useState('');
	return (
		<>
			<div className={styles.inputWrapper}>
				<h1>The component playbook for UI components</h1>
				<input
					className={styles.input}
					placeholder="Find a component... 🔎️‍"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<span>yes, there's a search for 2 components</span>
			</div>
			<ul className={styles.plays}>
				{components
					.filter((component) => component.name.includes(query))
					.map((component) => (
						<Card {...component} />
					))}
			</ul>
		</>
	);
}
