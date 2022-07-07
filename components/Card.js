import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import TypingText from "../components/TypingText";
// import * as PIXI from "pixi.js";

export default function Card(props) {
    const who = [
        "data scientist",
        "fitness enthusiast",
        "programmer",
        "nature roamer",
        "engineer",
        "mindful warrior",
        "full stack developer",
        "yogi??",
    ];
    return (
        <div className={styles.landing}>
            <div className={styles.pic}>
                <Image
                    src={props.src}
                    alt="landscape"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className={styles.headingText}>
                <h1 className={styles.title}>LAINEY NEILD</h1>
                <TypingText text={who} stop={110} start={18} />
            </div>
        </div>
    );
}
