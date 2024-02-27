'use client'


import Image from 'next/image';
import styles from './header.module.scss';
import Logo from '../../../public/Logo.svg'
import Avatar from '../../../public/avatar.png'
import { TfiBell } from "react-icons/tfi";
import Link from 'next/link';
import Search from '../../../public/icons/search.svg'
import { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";


const Header = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className={styles.header}>

            <div className={styles.searchContainer}>

                <Image
                    src={Logo}
                    alt="Logo"
                    width={144}
                    height={30}
                />
                <div className={styles.search}>
                    <input
                        placeholder='Search for anything'
                    />
                    <button className={styles.searchButton}>
                        <Image
                            src={Search}
                            width={16}
                            height={16}
                            alt='search'
                        />
                        {/* <IoSearchOutline /> */}
                    </button>
                </div>
            </div>


            <div className={styles.profile}>
                <Link href={'/'} className={styles.link}>Docs</Link>

                <Link href={'/'}>
                    {/* <Image
                        src={Bell}
                        alt='notifications'
                    /> */}<TfiBell size={24} />

                </Link>


                <span>
                    <Image
                        src={Avatar}
                        alt='User Avatar'
                    />

                    <button className={styles.drop} onClick={toggleDropdown}>
                        Adedji <IoMdArrowDropdown />
                    </button>

                    <div className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}>
                        <ul>
                            <li><Link href="/notifications">Notifications</Link></li>
                            <li><Link href="/settings">Settings</Link></li>
                            {/* Add more dropdown items here */}
                        </ul>
                    </div>

                </span>
            </div>

        </header>
    )
}

export default Header