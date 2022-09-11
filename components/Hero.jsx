import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/Hero.module.css";
import TypingText from "./TypingText";
import Image from "next/image";

export default function Hero(props) {
    const who = [
        "data scientist",
        "fitness enthusiast",
        "programmer",
        "nature wanderer",
        "full stack developer",
        "yogi??",
    ];
    return (
        <div id="hero" className={styles.hero}>
            <div className={styles.landing}>
                <div className={styles.pic}>
                    <Image
                        src="/header.jpeg"
                        alt="landscape"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <div className={styles.headingText}>
                    <h1 className={styles.title}>LAINEY NEILD</h1>
                    <TypingText text={who} stop={110} start={18} />
                </div>
            </div>
        </div>
    );
}
