import * as React from 'react';
import { useId } from '@reach/auto-id';
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

export function Checkboxes(props: React.HTMLAttributes<HTMLFieldSetElement>) {
	const [checkedItems, setCheckedItems] = React.useState([true, false, false]);
	const firstCheckboxId = useId();
	const secondCheckboxId = useId();
	const thirdCheckboxId = useId();

	const allChecked = checkedItems.every(Boolean);
	const indeterminate = checkedItems.some(Boolean) && !allChecked;

	return (
		<fieldset {...props}>
			<legend>
				Choose ingredients <span aria-hidden>👇</span>
			</legend>
			<Checkbox
				aria-controls={`${firstCheckboxId} ${secondCheckboxId} ${thirdCheckboxId}`}
				checked={allChecked}
				indeterminate={indeterminate}
				onChange={(e) => setCheckedItems([e.target.checked, e.target.checked, e.target.checked])}
			>
				All ingredients
			</Checkbox>
			<div className={styles.checkboxes}>
				<Checkbox
					id={firstCheckboxId}
					checked={checkedItems[0]}
					onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1], checkedItems[2]])}
				>
					Tomato
				</Checkbox>
				<Checkbox
					id={secondCheckboxId}
					checked={checkedItems[1]}
					onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked, checkedItems[2]])}
				>
					Lettuce
				</Checkbox>
				<Checkbox
					id={thirdCheckboxId}
					checked={checkedItems[2]}
					onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], e.target.checked])}
				>
					Cucumber
				</Checkbox>
			</div>
		</fieldset>
	);
}
