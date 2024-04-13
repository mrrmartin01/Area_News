import React from "react";
import Link from "next/link";
import Links from "../links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        <div className={styles.logo}>
          <Image
            src={"/logo.png"}
            alt="logo"
            fill
            sizes="(max-width: 480px) 120px, (min-width: 481px) and (max-width: 1024px) 120px, 150px"
          />
        </div>
      </Link>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
