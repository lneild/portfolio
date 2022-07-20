import React from "react";
import Image from "next/Image";
import styles from "../styles/Ligo.module.css";
import Blob from "../components/Blob.js";

export default function ligo() {
    return (
        <div className={styles.ligo}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Image
                        src="/Ligo_logo.png"
                        alt="ligo heading"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center center"
                    />
                </div>
            </div>
            <div className={styles.myWork}>
                {/* <Blob description="here is some cool shit i did" /> */}
            </div>
        </div>
    );
}
