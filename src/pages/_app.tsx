import React from 'react';
import { DefaultSeo } from 'next-seo';
import Link from 'next/link';
import Head from 'next/head';
import { Icon } from '../components';
import './base.scss';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="keywords" content="ui playbook" />
				<link rel="shortcut icon" href="/static/favicon.ico" />
			</Head>
			<DefaultSeo
				title="UI Playbook"
				description="Recipes for common UI components"
				openGraph={{
					type: 'website',
					url: 'https://uiplaybook.dev',
					title: 'UI Playbook',
					description: 'UI Playbook is a documented collection of common UI components',
					images: [
						{
							url: '/static/playbook.png',
							alt: 'UI Playbook',
						},
					],
				}}
			/>
			<header>
				<Link href="/">
					<p>
						<span className="highlight">UI</span> Playbook
					</p>
				</Link>
				<a
					href="https://github.com/raunofreiberg/ui-playbook"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Open Github"
				>
					<Icon icon="github" />
				</a>
			</header>
			<main>
				<Component {...pageProps} />
			</main>
		</>
	);
}
