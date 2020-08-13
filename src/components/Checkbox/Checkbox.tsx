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
			{indeterminate ? <span className={styles.line} /> : <Icon icon="check" className={styles.check} />}
			{children && <span className={styles.label}>{children}</span>}
		</label>
	);
}

const PARENT_ID: string = 'PARENT';
const CHILD_1_ID: string = 'CHILD1';
const CHILD_2_ID: string = 'CHILD2';

const getCheckedChildrenCount = (checkedItems: any) => {
	const childItems = Object.keys(checkedItems).filter((i) => i !== PARENT_ID);
	return childItems.reduce((count, i) => (checkedItems[i] ? count + 1 : count), 0);
};

const getIsParentIndeterminate = (checkedItems: any) => {
	const checkedChildrenCount = getCheckedChildrenCount(checkedItems);
	return checkedChildrenCount > 0 && checkedChildrenCount < 2;
};

export function Checkboxes() {
	const initialCheckedItems: Record<string, boolean> = {
		[PARENT_ID]: false,
		[CHILD_1_ID]: false,
		[CHILD_2_ID]: false,
	};
	const [checkedItems, setCheckedItems] = React.useState(initialCheckedItems);

	const onChange = (event: any) => {
		const itemValue = event.target.value;

		if (itemValue === PARENT_ID) {
			const newCheckedState = !checkedItems[PARENT_ID];
			// Set all items to the checked state of the parent
			setCheckedItems(Object.keys(checkedItems).reduce((items, i) => ({ ...items, [i]: newCheckedState }), {}));
		} else {
			const newCheckedItems = {
				...checkedItems,
				[itemValue]: !checkedItems[itemValue],
			};

			setCheckedItems({
				// If all children would be unchecked, also uncheck the parent
				...newCheckedItems,
				[PARENT_ID]: getCheckedChildrenCount(newCheckedItems) > 0,
			});
		}
	};

	return (
		<div>
			<Checkbox
				checked={checkedItems[PARENT_ID]}
				indeterminate={getIsParentIndeterminate(checkedItems)}
				onChange={onChange}
				value={PARENT_ID}
				name="parent"
			>
				Parent checkbox
			</Checkbox>
			<div
				style={{
					display: 'flex',
					gap: 8,
					flexDirection: 'column',
					paddingLeft: '24px',
					marginTop: 8,
				}}
			>
				<Checkbox checked={checkedItems[CHILD_1_ID]} onChange={onChange} value={CHILD_1_ID} name="child-1">
					Child checkbox 1
				</Checkbox>
				<Checkbox checked={checkedItems[CHILD_2_ID]} onChange={onChange} value={CHILD_2_ID} name="child-1">
					Child checkbox 2
				</Checkbox>
			</div>
		</div>
	);
}
