import React, { useState, useEffect } from "react";
import styles from "../styles/Popup.module.css";
import Button from "../components/Button";
import Polaroid from "./Polaroid";

export default function Popup(props) {
    return (
        <div className={styles.viewWindow}>
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
