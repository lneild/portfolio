import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/AboutMe.module.css";
// import popupStyles from "../styles/Popup.module.css";
import Popup from "./Popup";
import Link from "next/link";
import Image from "next/image";

const popupData = {
    past: {
        description: (
            <>
                Unlike many girls who grew up hearing fairy tales about
                princesses and mermaids, I was raised hearing stories about my
                great-grandfather,{" "}
                <Link href="https://en.wikipedia.org/wiki/William_Edward_Hanford">
                    <a className={styles.linkStyle}>Dr. William Hanford</a>
                </Link>
                , and his many inventions. Dr. Hanford received over 120
                patents, including for his best-known creation, polyurethane.
                Thes New York Times called him{" "}
                <Link href="nytimes.com/1996/01/31/us/w-e-hanford-87-chemist-who-changed-world.html">
                    <a className={styles.linkStyle}>
                        “The chemist who changed the world.”
                    </a>
                </Link>
                This family legacy has fueled my creative and entrepreneurial
                drive, reminding me every day that we are all capable of
                contributing important new discoveries to society. The driving
                force behind my passion for STEM has been the curiosity to
                understand and innovate, encoded in my DNA.
            </>
        ),
        picTitle: "Family",
        picDate: "'08",
        src: "/family.jpg",
    },
    present: {
        description: `I am pursuing a double major in computer science and data science at Northwestern University. My coursework focuses on data structures, information processing, and programming. Outside the classroom, I enjoy running, hiking, squash, and meditating. I am a co-captain for Northwestern’s club squash team and social chair of my sorority Tri Delta. I am constantly seeking new challenges and surrounding myself with people who help to elevate and inspire me. `,
        picTitle: "College Day 1",
        picDate: "'21",
        src: "/college.jpg",
    },
    future: {
        description: `I aspire to be part of an innovative and collaborative company, working on exciting, cutting-edge projects. I hope to work with compelling, ambitious teammates who are passionate about our shared mission. When I envision the future, I see myself as engrossed in my work, positively engaged with my community, and living a purposeful life.`,
        picTitle: "Career",
        picDate: "",
        src: "/headshot.jpg",
    },
};

export default function AboutMe(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOpen = (time) => {
        setIsOpen(time);
    };

    // const handleScroll = () => {
    //     const curPos = window.pageYOffset;
    //     const windowPos = window.innerHeight;
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window, removeEventListener("scroll", handleScroll);
    // }, [handleScroll]);
    return (
        <div id="aboutMe" className={styles.aboutMe}>
            <div className={styles.title}>ABOUT ME</div>

            {isOpen && (
                <Popup
                    {...popupData[isOpen]}
                    title={isOpen}
                    handleClose={handleClose}
                />
            )}

            <div className={styles.content}>
                <div className={styles.timelineWrap}>
                    <div className={styles.timeline}>
                        <div
                            className={styles.event}
                            onClick={() => handleOpen("past")}
                        >
                            PAST
                        </div>
                        <div
                            className={styles.event}
                            onClick={() => handleOpen("present")}
                        >
                            PRESENT
                        </div>
                        <div
                            className={styles.event}
                            onClick={() => handleOpen("future")}
                        >
                            FUTURE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
