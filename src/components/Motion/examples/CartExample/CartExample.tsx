import React from 'react';
import cn from 'classnames';
import { Icon, Badge } from '../../..';
import styles from './CartExample.module.scss';

const src =
	'https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1589398875141-QL8O2W7QS3B4MZPFWHJV/ke17ZwdGBToddI8pDm48kBVDUY_ojHUJPbTAKvjNhBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmV5_8-bAHr7cY_ioNsJS_wbCc47fY_dUiPbsewqOAk2CqqlDyATm2OxkJ1_5B47U/image-asset.jpeg';

export function CartExample() {
	const [added, setAdded] = React.useState(false);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		const id = setInterval(() => {
			setAdded((prevAdded) => {
				if (prevAdded === false) {
					setTimeout(() => {
						setCount((prevCount) => prevCount + 1);
					}, 1000);
				}
				return !prevAdded;
			});
		}, 1000);

		return () => {
			clearInterval(id);
		};
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.product}>
				<img className={styles.image} src={src} alt="Product image of iPhone SE RED" />
				<img
					className={cn(styles.thumbnail, added && styles.added)}
					src={src}
					alt="Product image of iPhone SE RED"
				/>
				<div className={styles.body}>
					<h4>iPhone SE RED — $399</h4>
					<p>Every iPhone SE RED purchase now contributes directly to the Global Fund to combat COVID-19.</p>
					<button tabIndex={-1} className={added ? styles.ripple : undefined}>
						Add to cart
					</button>
				</div>
			</div>
			<div className={styles.cart}>
				<Icon icon="cart" />
				<Badge className={styles.badge}>{count}</Badge>
			</div>
		</div>
	);
}
