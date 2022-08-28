import React from "react";
import Image from "next/image";
import styles from "../styles/Rockefeller.module.css";

export default function rockefeller() {
    return (
        <div id="rockefeller" className={styles.rockefeller}>
            <div className={styles.picTextContainer}>
                <div className={styles.icon}>
                    <Image
                        src="/construction.png"
                        alt="img"
                        width="400px"
                        height="400px"
                        objectFit="cover"
                        objectPosition="top center"
                        priortiy
                    />
                </div>
                <div className={styles.text}>Under Construction</div>
            </div>
        </div>
    );
}
