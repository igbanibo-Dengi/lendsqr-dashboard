import React from 'react'
// import styles from './page.module.scss'
import Overview from '@/components/Overview/Overview'
import Datatable from '@/components/Table/Datatable'

const page = () => {
    return (
        <>
            <section>
                <Overview />
            </section>
            <section>
                <Datatable />
            </section>
        </>
    )
}

export default page