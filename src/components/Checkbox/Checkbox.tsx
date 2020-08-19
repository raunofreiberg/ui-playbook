import React from 'react';
import cn from 'classnames';
import { Icon } from '..';
import styles from './Checkbox.module.scss';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	children?: string;
	indeterminate?: boolean;
}

export default function Checkbox({ className, children, indeterminate, checked, ...rest }: CheckboxProps) {
	return (
		<label className={cn(styles.wrapper, className)}>
			<input
				className={cn(styles.checkbox, {
					[styles.indeterminate]: indeterminate,
				})}
				type="checkbox"
				aria-checked={indeterminate ? 'mixed' : checked}
				checked={checked}
				{...rest}
			/>
			<span className={styles.line} />
			<Icon icon="check" className={styles.check} />
			{children && <span className={styles.label}>{children}</span>}
		</label>
	);
}

export function Checkboxes() {
	const [checkedItems, setCheckedItems] = React.useState([true, false]);

	const allChecked = checkedItems.every(Boolean);
	const indeterminate = checkedItems.some(Boolean) && !allChecked;

	return (
		<div>
			<Checkbox
				checked={allChecked}
				indeterminate={indeterminate}
				onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
			>
				Parent checkbox
			</Checkbox>
			<div
				style={{
					display: 'flex',
					gap: 8,
					flexDirection: 'column',
					paddingLeft: '16px',
					marginTop: 8,
				}}
			>
				<Checkbox
					checked={checkedItems[0]}
					onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
				>
					Child checkbox 1
				</Checkbox>
				<Checkbox
					checked={checkedItems[1]}
					onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
				>
					Child checkbox 2
				</Checkbox>
			</div>
		</div>
	);
}
