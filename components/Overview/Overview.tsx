import React from 'react'
import styles from './overview.module.scss'
import Image from 'next/image'

const Overview = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image
                    src='/icons/icon1.png'
                    alt='Users'
                    width={40}
                    height={40}
                />
                <p className={styles.text}>Users</p>
                <p className={styles.amount}>2,453</p>
            </div>

            <div className={styles.card}>
                <Image
                    src='/icons/icon2.png'
                    alt='Users'
                    width={40}
                    height={40}
                />
                <p className={styles.text}>Active Users</p>
                <p className={styles.amount}>2,453</p>
            </div>

            <div className={styles.card}>
                <Image
                    src='/icons/icon3.png'
                    alt='Users'
                    width={40}
                    height={40}
                />
                <p className={styles.text}>Users with Loans</p>
                <p className={styles.amount}>2,453</p>
            </div>

            <div className={styles.card}>
                <Image
                    src='/icons/icon4.png'
                    alt='Users'
                    width={40}
                    height={40}
                />
                <p className={styles.text}>Users with Savings</p>
                <p className={styles.amount}>2,453</p>
            </div>
        </div>
    )
}

export default Overview