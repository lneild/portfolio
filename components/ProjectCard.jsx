import React from "react";
import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";
import Link from "next/link";

export default function ProjectCard(props) {
    return (
        <Link href={`/${props.href}`}>
            {/* <> */}
            <div className={styles.projectCard}>
                <a id={props.href} />
                <div className={styles.backgroundPic}>
                    <Image
                        src={props.src}
                        alt={props.title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top center"
                        priority
                    />
                </div>
                <div className={styles.bottomLabel}>
                    <div className={styles.title}>{props.title}</div>
                    <div className={styles.date}>{props.date}</div>
                </div>
            </div>
            {/* </> */}
        </Link>
    );
}
