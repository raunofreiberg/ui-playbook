import React from 'react';
import { Icon } from '..';
import styles from './Snackbar.module.scss';

export default function Snackbar() {
    return (
        <div className={styles.wrapper} role="alert">
            Snackbar message
            <Icon icon="close" />
        </div>
    )
}
