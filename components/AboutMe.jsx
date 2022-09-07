import React, { useState, useEffect } from "react";
import styles from "../styles/AboutMe.module.css";
import Popup from "./Popup";
import Image from "next/image";
import { remove } from "dom/lib/mutation";

const popupData = {
    past: {
        description: `Unlike many girls who grow up hearing fairy tales about princesses and mermaids, ever since I was born I have heard stories about my great-grandfather Dr. William Hanford and his inventions. My great-grandpa was granted more than 120 patents, including his best-known invention of polyurethane. This family legacy has driven my creative and entrepreneurial drive. The fact that my great-grandfather was referred to by the New York Times as “the chemist who changed the world” reminds me every day of what we all are capable of accomplishing. Indeed, the driving force behind my passion for STEM has been the curiosity to understand and innovate, encoded in my DNA.`,
        picTitle: "Family",
        picDate: "'08",
        src: "/family.jpg",
    },
    present: {
        description: `I am currently pursuing a double major in computer science and data science at Northwestern University. In my coursework, I am focused on data structures, information processing, and programming. Outside of the classroom, I approach life more holistically. I enjoy running, hiking, meditating, and most importantly, being a part of diverse communities. I am a co-captain for Northwestern’s club squash team and also serve as the social chair of my sorority Tri Delta. I thrive in innovative and intellectual environments and appreciate being surrounded by people who challenge and inspire me. `,
        picTitle: "College Day 1",
        picDate: "'21",
        src: "/college.jpg",
    },
    future: {
        description: `When I think of my career, I place more emphasis on the work environment, envisioning myself in a collaborative and innovative ecosystem where I am working on something exciting, cutting-edge, and revolutionary. I want to work with compelling people who are passionate and hardworking. Ultimately, when I envision my future, I see myself as engrossed in my work, engaged in my community, and living a purposeful life. Most importantly, I want to feel professionally fulfilled by working on projects I find meaningful and impactful. `,
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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

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
