"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      key={item.title}
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      <span className={`${pathName !== item.path && styles.navItems}`}>{item.title}</span>
    </Link>
  );
};

export default NavLink;
