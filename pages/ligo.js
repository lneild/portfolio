import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Ligo.module.css";
import MyWorkCarousel from "../components/MyWorkCarousel";

const logoData = {
    sql: "/sql-server.png",
    notion: "/notion.png",
    ga: "/google-analytics.png",
};

export default function Ligo() {
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverOut = () => {
        console.log("out");
        setIsHovered(false);
    };

    const handleHoverIn = (tool) => {
        console.log("in");
        setIsHovered(tool);
    };

    const PictureCode = ({ enabled, logo }) => {
        return (
            <div className={`${styles.photo} ${!enabled ? styles.hidden : ""}`}>
                <Image
                    src={logo}
                    alt={logo}
                    layout="fill"
                    objectFit="contain"
                    objectPosition={"right top"}
                    priority
                />
            </div>
        );
    };

    const JobDescription = () => {
        return (
            <p>
                Ligo is a legal platform to start, run and protect businesses by
                allowing them to easily create, sign, notarize, and manage legal
                paperwork located in Amsterdam, NL. While I worked there, In
                general, I analyzed data and served as link between development
                team and growth team. I primarily coded in
                <span
                    className={styles.keyTool}
                    onMouseEnter={() => handleHoverIn("sql")}
                    onMouseLeave={() => handleHoverOut()}
                >
                    {" "}
                    SQL{" "}
                </span>
                to display data in an effort to help the marketing team create
                their stategy. Most of my tasks were assigned through
                <span
                    className={styles.keyTool}
                    onMouseEnter={() => handleHoverIn("notion")}
                    onMouseLeave={() => handleHoverOut()}
                >
                    {" "}
                    Notion{" "}
                </span>
                and I coded in a Redashdomain called Stats. This tool allowed me
                to easily publish all visals to public dashboards, visible to
                all members at the company. In adding to coding SQL queries, I
                also utilized
                <span
                    className={styles.keyTool}
                    onMouseEnter={() => handleHoverIn("ga")}
                    onMouseLeave={() => handleHoverOut()}
                >
                    {" "}
                    Google Anayltics{" "}
                </span>
                to anaylze page traffic and diagnose the root of troughs in
                revenue so that the growth team could try and course correct the
                company.
            </p>
        );
    };

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
                <div className={styles.description}>
                    <JobDescription />
                    <PictureCode
                        logo={logoData.sql}
                        enabled={isHovered === "sql"}
                    />
                    <PictureCode
                        logo={logoData.notion}
                        enabled={isHovered === "notion"}
                    />
                    <PictureCode
                        logo={logoData.ga}
                        enabled={isHovered === "ga"}
                    />
                </div>
                <div className={styles.workTitle}>my work</div>
            </div>
            <div className={styles.myWork}>
                <MyWorkCarousel />
            </div>
        </div>
    );
}
