import React from "react";
import styles from "../styles/Blob.module.css";

export default function Blob(props) {
    return (
        <div className={styles.blob}>
            <div className={styles.text}>{props.description}</div>
        </div>
    );
}
