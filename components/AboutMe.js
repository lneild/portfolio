import React, { useState, useEffect } from "react";
import styles from "../styles/AboutMe.module.css";
import Popup from "../components/Popup";
import Image from "next/image";

const popupData = {
    past: {
        description: `Unlike some girls who grow up hearing fairy tales about princesses and mermaids, ever since I was born I have heard stories about my great-grandfather, Dr. William Hanford, and his inventions.  Dr. Hanford was granted more than 120 patents, including his best-known invention of polyurethane. This family history and legacy has driven my creative and entrepreneurial drive. The fact that my great-grandfather was referred to by the New York Times as the chemist who changed the world reminds me every day of what we are all capable of accomplishing. So often, I see people too focused on incremental thinking, making marginal improvements to an existing system, instead of considering revolutionary approaches that could deliver dramatic improvements. While some people might feel intimidated by the pressure of trying to live up to past successful family members, I feel empowered by it, just knowing that such creativity and innovation are part of my DNA. Indeed, the driving force behind my passion for STEM has never been academic performance, but rather my curiosity to understand and innovate.`,
        picTitle: "Family",
        picDate: "'08",
        src: "/family.jpg",
    },
    present: {
        description: `I am currently pursuing a double major in computer science and data science at Northwestern University. Outside of academics, I try to approach life holistically. Although I am constantly trying to become a better version of myself, the crux of my approach is compassion—not only for others but also for myself. I believe that to be a well rounded and open minded human, we need to draw energy from diverse sources. Any human can be broken down to mind, body, and soul. To grow my mind, I enjoy studying and learning through my academics. For my physical health, I enjoy running outside, playing sports, and meditation. My soul is energized by goofing around with my family and spending time with my friends. `,
        picTitle: "College Day 1",
        picDate: "'21",
        src: "/college.jpg",
    },
    future: {
        description: `To me, planning on what my life will look like in 5, 10, 15 years is unimportant—I can only hope for what I want my future life will feel like. Most importantly, I want to feel happy, surrounded by people who not only love me unconditionally but also challenge me to be the best version of myself. Professionally speaking, I don’t know which type of company I want to work for specifically. I place much more emphasis on the environment, envisioning myself in a collaborative and innovative ecosystem. I want to work on something exciting, cutting-edge, and revolutionary.`,
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
