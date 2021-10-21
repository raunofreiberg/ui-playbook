import * as React from 'react';
import cn from 'classnames';
import styles from './Radio.module.scss';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
	children?: string;
}

export const Radio = React.forwardRef(
	({ children, className, ...rest }: RadioProps, ref: React.Ref<HTMLInputElement>) => {
		return (
			<label className={cn(styles.wrapper, className)}>
				<input ref={ref} className={styles.radio} type="radio" {...rest} />
				{children && <span className={styles.label}>{children}</span>}
			</label>
		);
	},
);

Radio.displayName = 'Radio';
