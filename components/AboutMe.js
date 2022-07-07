import React from "react";
import Image from "next/image";
import styles from "../styles/AboutMe.module.css";
import TypingText from "./TypingText";

export default function AboutMe(props) {
    const txt = ["ABOUT ME"];

    return (
        <div className={styles.aboutMe}>
            <div className={styles.pic}>
                <Image
                    src={props.src}
                    alt="underwater"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className={styles.circle}>
                <div className={styles.heading}>ABOUT ME</div>
                {/* <TypingText text={txt} stop={400} start={10000} /> */}
            </div>
        </div>
    );
}
