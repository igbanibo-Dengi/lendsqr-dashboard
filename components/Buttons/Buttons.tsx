// Button.tsx

import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'danger' | 'primary-outline';
    label: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', label, children, ...rest }) => {
    let classNames = [styles.btn];

    if (variant === 'outline') {
        classNames.push(styles['btn-outline']);
    } else if (variant === 'danger') {
        classNames.push(styles['btn-danger']);
    } else if (variant === 'primary-outline') {
        classNames.push(styles['btn-primary-outline']);
    }
    return (
        <button className={classNames.join(' ')} {...rest}>
            {children}
            <span className={styles.visuallyHidden}>{label}</span>
        </button>
    );
};

export default Button;
