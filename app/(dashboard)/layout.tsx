import Header from "@/components/shared/Header/Header";
import Sidebar from "@/components/shared/Sidebar/Sidebar";
import styles from "./layout.module.scss";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {



    return (
        <div >
            <Header />
            <main className={styles.container}>
                <Sidebar />
                <div className={styles.mainContainer}>
                    {children}
                </div>
            </main>

        </div>
    );
}
