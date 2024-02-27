'use client'


import Button from "@/components/Buttons/Buttons";
import Image from "next/image";
import Img from "../public/Pablo.png"
import Logo from "../public/Logo.svg"
import { useRouter } from "next/navigation";

import styles from "./page.module.scss";
import Input from "@/components/Input/Input";
import Link from "next/link";

export default function Home() {

  const router = useRouter()

  const handleRoute = () => {
    router.push("/dashboard")
  }

  return (
    <main className={styles.container}>

      <div className={styles.main}>

        <Image
          src={Logo}
          alt="Logo"
        />
        <div className={styles.imageContainer}>
          <Image
            src={Img}
            alt="Sign in image"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <span>
            <h1>Welcome!</h1>
            <p>Enter details to login</p>
          </span>
          <div className={styles.mainform}>
            <Input placeholder="Email" />
            <Input placeholder="password" />
            <Link href={'/'} className={styles.link}>Forgot password ?</Link>
            <Button label="Log in" onClick={handleRoute}  >LOG IN</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
