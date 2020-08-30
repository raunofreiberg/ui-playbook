import React from 'react';
import { TextField } from '../../..';
import styles from './TextFieldExample.module.scss';

const text = 'Rauno Freiberg';

export function TextFieldExample() {
	const [value, setValue] = React.useState('');

	React.useEffect(() => {
		if (value === text) {
			const id = setTimeout(() => {
				setValue('');
			}, 2000);

			return () => {
				clearTimeout(id);
			};
		}

		const next = text.charAt(value.length);

		if (!next) {
			return;
		}

		const id = setTimeout(() => {
			setValue(value + next);
		}, 100);

		return () => {
			clearTimeout(id);
		};
	}, [value]);

	return (
		<div className={styles.wrapper}>
			<TextField
				tabIndex={-1}
				label="Email"
				placeholder="joe@doe.com"
				value={value}
				error={value === text ? 'Please enter an email' : undefined}
				className={value === text ? styles.shake : undefined}
			/>
		</div>
	);
}
