'use client'

import React, { useState } from 'react';
import styles from './dropdown.module.scss';

interface Option {
    label: string;
    value: string | number;
}

interface DropdownProps {
    options: Option[];
    onSelect: (option: Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleOptionSelect = (option: Option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className={styles.dropdown}>
            <button className={styles.dropdownToggle}>{selectedOption ? selectedOption.label : 'Select an option'}</button>
            <ul className={styles.dropdownMenu}>
                {options.map((option, index) => (
                    <li key={index} onClick={() => handleOptionSelect(option)}>{option.label}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
