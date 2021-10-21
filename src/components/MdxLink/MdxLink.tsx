import React from 'react';
import Link, { LinkProps } from 'next/link';

interface MdxLinkProps extends LinkProps {
	title: string;
	href: string;
	children: React.ReactNode;
}

export default function MdxLink({ title, children, href, ...delegated }: MdxLinkProps) {
	return (
		<Link href={href} {...delegated}>
			<a title={title}>{children}</a>
		</Link>
	);
}
