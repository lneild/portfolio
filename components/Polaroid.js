import React from "react";
import styles from "../styles/Polaroid.module.css";
import Image from "next/Image";

export default function Polaroid(props) {
    return (
        <div className={styles.polariod}>
            <div className={styles.backgroundPic}>
                <Image
                    src={props.src}
                    alt={props.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top center"
                />
            </div>
            <div className={styles.bottomLabel}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.date}>{props.date}</div>
            </div>
        </div>
    );
}
