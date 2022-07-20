import React from "react";
import styles from "../styles/Button.module.css";

export default function Button(props) {
    return (
        <div className={styles.container}>
            <div className={styles.btn}>
                <svg>
                    <defs>
                        <linearGradient id="grad1">
                            <stop offset="20%" stopColor="#D9E4E3" />
                            <stop offset="100%" stopColor="#99B5BB" />
                        </linearGradient>
                    </defs>
                    <rect
                        x="5"
                        y="5"
                        rx="25"
                        fill="none"
                        stroke="url(#grad1)"
                        width="150"
                        height="50"
                    ></rect>
                </svg>
            </div>
            <div className={styles.text}>{props.text}</div>
        </div>
    );
}
