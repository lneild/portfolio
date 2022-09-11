import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/Hero.module.css";
import TypingText from "./TypingText";
import Image from "next/image";
import { useWindowHeight } from "../hooks/useWindowHeight";

export default function Hero(props) {
    const who = [
        "data scientist",
        "fitness enthusiast",
        "programmer",
        "nature wanderer",
        "full stack developer",
        "yoga lover",
    ];

    const windowHeight = useWindowHeight();
    return (
        <div id="hero" className={styles.hero} style={{ height: windowHeight }}>
            <div className={styles.pic} style={{ height: windowHeight }}>
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
    );
}
