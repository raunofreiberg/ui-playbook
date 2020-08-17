import React from 'react';
import styles from './AnchorHeading.module.scss';

export interface AnchorHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	// This restriction may be a bit naive, but I don't see anyone using booleans
	// or numbers inside a heading. 🙄
	children: string | React.ReactElement | React.ReactElement[];
	as?: 'h2' | 'h3';
}

function slugify(string: string) {
	return string
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
}

// We will traverse the children until we find a string.
function getStringFromChildren(children: string | React.ReactElement) {
	if (typeof children === 'string') {
		return children;
	}

	let current = children;

	while (typeof current.props.children !== 'string') {
		current = current.props.children;
	}

	return current.props.children;
}

export function AnchorHeading({ as: Component = 'h2', children, ...rest }: AnchorHeadingProps) {
	const slug = React.useMemo(() => {
		if (Array.isArray(children)) {
			const id = React.Children.toArray(children).map(getStringFromChildren).join('');
			return slugify(id);
		}
		return slugify(getStringFromChildren(children));
	}, [children]);
	return (
		<Component id={slug} className={styles.anchor} {...rest}>
			<a href={`#${slug}`} className={styles.link} aria-label="Anchor link">
				#
			</a>
			{children}
		</Component>
	);
}
