import React from "react";
import Image from "next/image";
import styles from "../styles/ChartDisplay.module.css";

export default function ChartDisplay(props) {
    const charts = [];

    props.data.forEach((pic) => {
        charts.push(
            <div className={styles.graph}>
                <Image
                    src={pic.src}
                    alt={pic.alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={"left top"}
                />
            </div>
        );
    });

    return (
        <div className={styles.glossOver}>
            <div className={styles.visualSection}>{charts}</div>
        </div>
    );
}
