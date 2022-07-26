import React, { useState } from "react";
import Image from "next/Image";
import styles from "../styles/Ligo.module.css";
import MyWorkCarousel from "../components/MyWorkCarousel";

export default function ligo() {
    return (
        <div id="ligo" className={styles.ligo}>
            <div id="header" className={styles.header}>
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
                <MyWorkCarousel />
            </div>
        </div>
    );
}
