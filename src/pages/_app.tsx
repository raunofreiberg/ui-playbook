import '@reach/listbox/styles.css';
import '@reach/tooltip/styles.css';
import './base.scss';
import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { RadixProvider } from '@modulz/radix';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';
import { Icon, Title } from '../components';

function Code({ children, className }) {
	const language = className.replace(/language-/, '');
	return (
		<Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={className}
					style={{
						...style,
						overflow: 'auto',
						marginBottom: 24,
						border: '1px solid var(--color-base-100)',
						borderRadius: 4,
						padding: 16,
					}}
				>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
}

function capitalize(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function App({ Component, pageProps, router }) {
	const [, componentName] = router.route.split('/play/');
	const title = componentName ? `UI Playbook — ${capitalize(componentName)}` : 'UI Playbook';

	React.useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			// @ts-ignore
			window.dataLayer = window.dataLayer || [];
			// @ts-ignore
			// eslint-disable-next-line no-inner-declarations
			function gtag() {
				// @ts-ignore
				// eslint-disable-next-line no-undef
				dataLayer.push(arguments);
			}
			// @ts-ignore
			gtag('js', new Date());
			// @ts-ignore
			gtag('config', 'UA-92206389-5', {
				page_location: window.location.href,
				page_path: window.location.pathname,
				page_title: window.document.title,
			});
			// @ts-ignore
			window.gtag = gtag;
		}
	}, [router.route]);

	return (
		<RadixProvider>
			<MDXProvider components={{ Icon, Link, code: Code, Title, NextSeo }}>
				<Head>
					<script async src="https://www.googletagmanager.com/gtag/js?id=UA-92206389-5" />
					<meta name="keywords" content="ui, playbook, documented collection, components, guideline" />
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
					<meta name="msapplication-TileColor" content="#6469FF" />
					<meta name="theme-color" content="#6469FF" />
					<meta name="twitter:site" content="@raunofreiberg" />
					<meta name="twitter:creator" content="@raunofreiberg" />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<NextSeo
					title={title}
					description="The documented collection of UI components."
					openGraph={{
						type: 'website',
						url: 'https://uiplaybook.dev',
						title,
						description: 'The documented collection of UI components.',
						images: [
							{
								url: 'https://uiplaybook.dev/static/og.png',
								alt: 'UI Playbook',
							},
						],
					}}
				/>
				<header>
					<Link href="/">
						<a aria-label="Go to home page">
							<Icon icon="logo" />
						</a>
					</Link>
					<a
						href="https://github.com/raunofreiberg/ui-playbook"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open Github in a new tab"
					>
						<Icon icon="github" className="github" />
					</a>
				</header>
				<main>
					<Component {...pageProps} />
				</main>
			</MDXProvider>
		</RadixProvider>
	);
}
