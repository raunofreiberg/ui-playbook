import React from 'react';
import { Button } from '../../..';
import styles from './ButtonExample.module.scss';

export function ButtonExample() {
	const [hover, setHover] = React.useState(false);

	React.useEffect(() => {
		const id = setInterval(() => {
			setHover((prevHover) => !prevHover);
		}, 1000);

		return () => {
			clearInterval(id);
		};
	}, []);

	return (
		<Button tabIndex={-1} hover={hover} className={styles.wrapper}>
			Label
		</Button>
	);
}
