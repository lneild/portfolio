import React, { useEffect, useRef } from "react";
import styles from "../styles/Popup.module.css";
import Button from "./Button";
import Polaroid from "./Polaroid";

import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

export default function Popup(props) {
    const popupRef = useRef(null);
    useEffect(() => {
        const ref = popupRef.current;
        disableBodyScroll(ref, { allowTouchMove: ref });
        return () => clearAllBodyScrollLocks();
    });
    return (
        <div className={styles.viewWindow} ref={popupRef}>
            <div className={styles.card}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.content}>
                    <div className={styles.photo}>
                        <Polaroid
                            title={props.picTitle}
                            date={props.picDate}
                            src={props.src}
                        />
                    </div>
                    <div className={styles.description}>
                        {props.description}
                    </div>
                </div>
                <div
                    className={styles.button}
                    onClick={(e) => {
                        e.preventDefault();
                        props.handleClose();
                    }}
                >
                    <Button text="CLOSE" />
                </div>
            </div>
        </div>
    );
}
