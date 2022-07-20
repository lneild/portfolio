import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard(props) {
    return (
        <div className={styles.projectCard}>
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
