import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Ligo.module.css";
import MyWorkCarousel from "../components/MyWorkCarousel";

export default function ligo() {
    // const pictureCode = (
    // <div className={styles.photo}>
    //     <Image
    //         src="/sql-server.png"
    //         alt="sql"
    //         layout="fill"
    //         objectFit="contain"
    //         objectPosition={"right top"}
    //     />
    // </div>
    // );

    const jobDescription = (
        <p>
            Ligo is a legal platform to start, run and protect businesses by
            allowing them to easily create, sign, notarize, and manage legal
            paperwork located in Amsterdam, NL. While I worked there, In
            general, I analyzed data and served as link between development team
            and growth team. I primarily coded in
            <span className={styles.keyTool}> SQL </span>
            to display data in an effort to help the marketing team create their
            stategy. Most of my tasks were assigned through
            <span className={styles.keyTool}> Notion </span>
            and I coded in a Redashdomain called Stats. This tool allowed me to
            easily publish all visals to public dashboards, visible to all
            members at the company. In adding to coding SQL queries, I also
            utilized
            <span className={styles.keyTool}> Google Anayltics </span>
            to anaylze page traffic and diagnose the root of troughs in revenue
            so that the growth team could try and course correct the company.
            {/* {pictureCode} */}
        </p>
    );
    return (
        <div id="ligo" className={styles.ligo}>
            <div id="header" className={styles.header}>
                <div className={styles.logo}>
                    <Image
                        src="/Ligo_logo.png"
                        alt="ligo heading"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center center"
                    />
                </div>
            </div>
            <div className={styles.background}>
                <div className={styles.workTitle}>data science intern</div>
                <div className={styles.description}>{jobDescription}</div>
                <div className={styles.workTitle}>my work</div>
            </div>
            <div className={styles.myWork}>
                <MyWorkCarousel />
            </div>
        </div>
    );
}
