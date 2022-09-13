import React, { useState, useEffect } from "react";
import styles from "../styles/Connect.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Connect() {
    return (
        <div id="connect">
            <div className={styles.connect}>
                <div className={styles.content}>
                    <div className={styles.socialContainer}>
                        <Link href="mailto:laineneild@gmial.com">
                            <div className={styles.social}>
                                <Image
                                    src="/mail.png"
                                    alt="mail"
                                    width="30"
                                    height="30"
                                />
                            </div>
                        </Link>
                        <a
                            target="_blank"
                            href="https://github.com/lneild"
                            rel="noopener noreferrer"
                        >
                            <div className={styles.social}>
                                <Image
                                    src="/github.png"
                                    alt="github"
                                    width="30"
                                    height="30"
                                />
                            </div>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/lainey-neild/"
                            rel="noopener noreferrer"
                        >
                            <div className={styles.social}>
                                <Image
                                    src="/linkedin.png"
                                    alt="linkedin"
                                    width="30"
                                    height="30"
                                />
                            </div>
                        </a>
                        <Link href="tel:+19144133732">
                            <div className={styles.social}>
                                <Image
                                    src="/phone.png"
                                    alt="phone"
                                    width="30"
                                    height="30"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className={styles.title}>Lainey Neild 2022 ©</div>
                </div>
            </div>
        </div>
    );
}
