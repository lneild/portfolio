import React from "react";
import styles from "../styles/BackNav.module.css";
import Link from "next/link";

export default function BackNav() {
    return (
        <div className={styles.btn}>
            <Link href="/#ligo">WORK</Link>
        </div>
    );
}
