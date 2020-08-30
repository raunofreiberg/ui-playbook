import React from 'react';
import styles from './SVGExample.module.scss';

export function SVGExample() {
	return (
		<a
			href="https://modulz.app"
			rel="noreferrer noopener"
			target="_blank"
			aria-label="Modulz website"
			className={styles.wrapper}
		>
			<svg width="80" height="80" viewBox="0 0 35 35" fill="none">
				<path id={styles['triangle-1']} d="M10 26.5L4 31V22L10 26.5Z" strokeWidth="0.5" fill="none" />
				<path id={styles['triangle-3']} d="M10 14.5L4 19V10L10 14.5Z" strokeWidth="0.5" fill="none" />
				<path id={styles['triangle-5']} d="M17 8.5L11 13V4L17 8.5Z" strokeWidth="0.5" fill="none" />
				<path d="M24 14.5L18 19V10L24 14.5Z" strokeWidth="0.5" fill="none" id={styles['triangle-7']} />
				<path d="M31 8.5L25 13V4L31 8.5Z" strokeWidth="0.5" fill="none" id={styles['triangle-9']} />
				<path d="M31 20.5L25 25V16L31 20.5Z" strokeWidth="0.5" fill="none" id={styles['triangle-11']} />
				<path id={styles['triangle-2']} d="M10 25L4 20.5L10 16V25Z" strokeWidth="0.5" fill="none" />
				<path d="M17 19L11 14.5L17 10V19Z" strokeWidth="0.5" fill="none" id={styles['triangle-6']} />
				<path d="M10 13L4 8.5L10 4V13Z" strokeWidth="0.5" fill="none" id={styles['triangle-4']} />
				<path d="M24 13L18 8.5L24 4V13Z" strokeWidth="0.5" fill="none" id={styles['triangle-8']} />
				<path d="M31 19L25 14.5L31 10V19Z" strokeWidth="0.5" fill="none" id={styles['triangle-10']} />
				<path d="M31 31L25 26.5L31 22V31Z" strokeWidth="0.5" fill="none" id={styles['triangle-12']} />
			</svg>
		</a>
	);
}
