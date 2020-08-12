import React from 'react';
import { Card } from '../components';
import styles from './index.module.scss';
import inputStyles from '../components/TextField/TextField.module.scss';

const components = [
	{
		name: 'tooltip',
		teaser: false,
	},
	{
		name: 'button',
		teaser: false,
	},
	{
		name: 'select',
		teaser: false,
	},
	{
		name: 'notification',
		teaser: false,
	},
	{
		name: 'TextField',
		teaser: false,
	},
	{
		name: 'avatar',
		teaser: false,
	},
	{
		name: 'checkbox',
		teaser: true,
	},
	{
		name: 'popover',
		teaser: true,
	},
];

export default function Home() {
	const [query, setQuery] = React.useState('');
	return (
		<>
			<div className={styles.inputWrapper}>
				<h1>The documented collection of UI components</h1>
				<input
					aria-label="Search for a component"
					className={inputStyles.input}
					placeholder="Find a component...️‍"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<span>yes, there's a search for {components.length} components ✌️</span>
			</div>
			<ul className={styles.plays}>
				{components
					.filter((component) => component.name.toLowerCase().includes(query.toLowerCase()))
					.map((component) => (
						<Card key={component.name} {...component} />
					))}
			</ul>
		</>
	);
}
