import * as React from 'react';
import cn from 'classnames';
import { Button, TextField } from '..';
import styles from './Footer.module.scss';

const PRISTINE = 'pristine';
const SUBMITTING = 'submitting';
const SUCCESS = 'success';

export default function Footer({ compact = false }: { compact: boolean }) {
	const [email, setEmail] = React.useState('');
	const [status, setStatus] = React.useState(PRISTINE);

	async function subscribe() {
		setStatus(SUBMITTING);

		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					email,
				}),
			});

			if (res.ok) {
				setStatus(SUCCESS);
				setEmail('');
				setTimeout(() => {
					setStatus(PRISTINE);
				}, 2000);
			} else {
				setStatus(PRISTINE);
				setEmail('');
			}
		} catch (err) {
			console.error(err);
			setStatus(PRISTINE);
			setEmail('');
		}
	}

	return (
		<footer className={cn(styles.wrapper, compact && styles.compact)}>
			<div className={styles.info}>
				<h3>Subscribe to the newsletter </h3>
				<p>Be notified of new components. {compact && <br />} No spam.</p>
			</div>
			<form className={styles.form} onSubmit={(e) => e.preventDefault()}>
				<TextField
					type="email"
					aria-label="Type your email"
					placeholder="joe.doe@gmail.com"
					style={{
						opacity: status === SUCCESS ? 0 : 1,
						transform: `scale(${status === SUCCESS ? 0 : 1})`,
					}}
					disabled={status === SUBMITTING}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Button
					type="submit"
					style={{
						opacity: status === SUCCESS ? 0 : 1,
						transform: `scale(${status === SUCCESS ? 0 : 1})`,
					}}
					disabled={status === SUBMITTING}
					onClick={subscribe}
				>
					Submit
				</Button>
				<p
					className={styles.success}
					style={{
						opacity: status === SUCCESS ? 1 : 0,
						transform: `scale(${status === SUCCESS ? 1 : 0})`,
					}}
				>
					Subscribed to newsletter 🥳
				</p>
			</form>
		</footer>
	);
}
