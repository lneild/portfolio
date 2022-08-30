import React, { useState, useEffect } from "react";
import styles from "../styles/Connect.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Connect() {
    return (
        <div id="connect">
            {/* <div className={styles.pic}>
                <Image
                    src="/ocean.jpg"
                    alt="Ocean"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div> */}
            <div className={styles.connect}>
                <div className={styles.title}>LETS CONNECT</div>
                <div className={styles.content}>
                    <div className={styles.socialContainer}>
                        <Link href="mailto:example@example.com">
                            <div className={styles.social}>
                                <div className={styles.icon1}>
                                    <Image
                                        src="/mail1.png"
                                        alt="mail"
                                        width="120"
                                        height="120"
                                    />
                                </div>

                                <div className={styles.icon2}>
                                    <Image
                                        src="/mail2.png"
                                        alt="mail"
                                        width="120"
                                        height="120"
                                    />
                                </div>
                            </div>
                        </Link>
                        <Link href="https://github.com/lneild">
                            <div className={styles.social}>
                                <div className={styles.icon1}>
                                    <Image
                                        src="/github1.png"
                                        alt="github"
                                        width="140"
                                        height="140"
                                    />
                                </div>
                                <div className={styles.icon2}>
                                    <Image
                                        src="/github2.png"
                                        alt="github"
                                        width="140"
                                        height="140"
                                    />
                                </div>
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/lainey-neild/">
                            <div className={styles.social}>
                                <div className={styles.icon1}>
                                    <Image
                                        src="/linkedin1.png"
                                        alt="linkedin"
                                        width="140"
                                        height="140"
                                    />
                                </div>
                                <div className={styles.icon2}>
                                    <Image
                                        src="/linkedin2.png"
                                        alt="linkedin"
                                        width="140"
                                        height="140"
                                    />
                                </div>
                            </div>
                        </Link>
                        <Link href="tel:+19144133732">
                            <div className={styles.social}>
                                <div className={styles.icon1}>
                                    <Image
                                        src="/phone1.png"
                                        alt="phone"
                                        width="120"
                                        height="120"
                                    />
                                </div>
                                <div className={styles.icon2}>
                                    <Image
                                        src="/phone2.png"
                                        alt="phone"
                                        width="120"
                                        height="120"
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
