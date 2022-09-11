import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Ligo.module.css";
import MyWorkCarousel from "../components/MyWorkCarousel";

// const logoData = {
//     sql: "/sql-server.png",
//     notion: "/notion.png",
//     ga: "/google-analytics.png",
// };

export default function Ligo() {
    // const [isHovered, setIsHovered] = useState(false);

    // const handleHoverOut = () => {
    //     console.log("out");
    //     setIsHovered(false);
    // };

    // const handleHoverIn = (tool) => {
    //     console.log("in");
    //     setIsHovered(tool);
    // };

    // const PictureCode = ({ enabled, logo }) => {
    //     return (
    //         <div className={`${styles.photo} ${!enabled ? styles.hidden : ""}`}>
    //             <Image
    //                 src={logo}
    //                 alt={logo}
    //                 layout="fill"
    //                 objectFit="contain"
    //                 objectPosition={"right top"}
    //                 priority
    //             />
    //         </div>
    //     );
    // };

    const JobDescription = () => {
        return (
            <p>
                Ligo is a LegalTech software platform providing an integrated
                dashboard that helps to create, operate and oversee businesses
                in the EU. While working there, I analyzed profitability data,
                user demographic data, and 
                <span className={styles.keyTool}>SEO</span> data, serving as a
                link between the software development and marketing teams. I
                developed 
                <span className={styles.keyTool}>PostresSQL</span> queries in a
                Redashdomain called 
                <span className={styles.keyTool}>Stats</span> to reveal insights
                about profitability metrics and client software utilization. 
                <span className={styles.keyTool}>Stats</span>
                 allowed me to publish these queries and corresponding graphs to
                public company dashboards, allowing all team members to access
                this analysis. These findings helped inform Ligo&apos;s KPIs and
                underpinned the company&apos;s ambitious quarterly planning
                process. I also leveraged
                <span className={styles.keyTool}> Google Analytics</span>
                 and <span className={styles.keyTool}>Amplitude</span> to
                correlate new features, blog posts, and macrotrends to page
                traffic in order to diagnose and explain variability in customer
                revenue. I am very grateful for the opportunity to contribute to
                Ligo, as it sharpened my data science skills and confirmed my
                desire to pursue this field professionally. 
            </p>
        );
    };

    return (
        <div id="ligo" className={styles.ligo}>
            {/* <Nav /> */}
            {/* <HashLink to="/index#projects">X</HashLink> */}
            <div id="header" className={styles.header}>
                <div className={styles.logo}>
                    <Image
                        src="/ligo_white.png"
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
                    {/* <PictureCode
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
                    /> */}
                </div>
                <div className={styles.workTitle}>my work</div>
            </div>
            <div className={styles.myWork}>
                <MyWorkCarousel />
            </div>
        </div>
    );
}
