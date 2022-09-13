import React from "react";
import styles from "../styles/BreadcrumbNav.module.css";
import Link from "next/link";
// import { Link as SectionLink } from "react-router-dom";

export default function BreadcrumbNav() {
    return (
        <div className={styles.breadcrumbs}>
            <Link className={styles.breadcrumbItem} href="/">
                Home
            </Link>

            {/* <SectionLink
                to={{
                    pathname: "/",
                    search: "experience",
                }}
            >
                Work
            </SectionLink> */}
            <Link href="/#ligo" className={styles.breadcrumbItem}>
                Work
            </Link>
            <Link className={styles.breadcrumbItemActive} href="/ligo">
                Ligo
            </Link>
        </div>
    );
}
