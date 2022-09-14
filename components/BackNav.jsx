import React from "react";
import styles from "../styles/BackNav.module.css";
import Link from "next/link";

export default function BackNav() {
    return (
        <Link href="/#ligo">
            <div className={styles.btn}>
                ← <span>Work</span>
            </div>
        </Link>
    );
}
