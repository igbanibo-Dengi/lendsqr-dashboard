'use client'
import React, { useState } from 'react';
import styles from './sidebar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { dashboardLinks } from '../../../constants/constants'
import { businessLinks } from '../../../constants/constants'
import { settingsLink } from '../../../constants/constants'

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleOpen = () => {
        setIsSidebarOpen(!isSidebarOpen);
        if (!isSidebarOpen) {
            // Close the dropdown when the sidebar is opened
            setIsDropdownOpen(false);
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
            <button className={styles.barButton} onClick={toggleOpen}>Open</button>

            {isSidebarOpen && (
                <button className={styles.dropButton} onClick={toggleDropdown}>
                    <Image
                        src='/icons/briefcase.svg'
                        width={16}
                        height={16}
                        alt='briefcase'
                    />
                    <p> Switch Organization</p>
                    <Image
                        src='/icons/down.svg'
                        width={16}
                        height={16}
                        alt='briefcase'
                    />
                </button>
            )}

            {isSidebarOpen && (
                <div className={`${styles.dropdown} ${isDropdownOpen ? styles.dropOpen : ''}`}>
                    <ul>
                        <li><Link href="/notifications">Notifications</Link></li>
                        <li><Link href="/settings">Settings</Link></li>
                    </ul>
                </div>
            )}



            <div className={styles.links}>
                <p className={styles.Dashboard}>
                    <Image
                        src='/icons/home.svg'
                        width={16}
                        height={16}
                        alt='briefcase'
                    />
                    Dashboard
                </p>


                <p className={`${styles.title} ${isSidebarOpen ? styles.titleOpen : ''}`}>CUSTOMERS</p>


                {dashboardLinks.map((item, index) => (
                    <Link className={styles.link} href={item.href} key={index}>
                        <Image
                            src='/icons/home.svg'
                            width={16}
                            height={16}
                            alt='briefcase'
                        />
                        {item.name}
                    </Link>
                ))}

                <p className={`${styles.title} ${isSidebarOpen ? styles.titleOpen : ''}`}>BUSINESS</p>


                {businessLinks.map((item, index) => (
                    <Link className={styles.link} href={item.href} key={index}>
                        <Image
                            src='/icons/home.svg'
                            width={16}
                            height={16}
                            alt='briefcase'
                        />
                        {item.name}
                    </Link>
                ))}

                <p className={`${styles.title} ${isSidebarOpen ? styles.titleOpen : ''}`}>SETTINGS</p>


                {settingsLink.map((item, index) => (
                    <Link className={styles.link} href={item.href} key={index}>
                        <Image
                            src='/icons/home.svg'
                            width={16}
                            height={16}
                            alt='briefcase'
                        />
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Sidebar;
