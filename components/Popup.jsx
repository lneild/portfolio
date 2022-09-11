import React, { useEffect } from "react";
import styles from "../styles/Popup.module.css";
import Button from "./Button";
import Polaroid from "./Polaroid";

export default function Popup(props) {
    useEffect(() => {
        const scrollPosition = window.pageYOffset;
        const enable = () => {
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = "100%";
        };
        const disable = () => {
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("position");
            document.body.style.removeProperty("top");
            document.body.style.removeProperty("width");
            window.scrollTo(0, scrollPosition);
        };
        enable();
        return disable;
    });

    return (
        <div className={styles.viewWindow}>
            <div className={styles.card}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.popUpScrollContainer}>
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
