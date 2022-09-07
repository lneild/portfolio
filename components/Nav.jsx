import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "../styles/Nav.module.css";

export default function Nav() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [atTop, setAtTop] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);

        if (currentScrollPos < 50) {
            setAtTop(true);
        } else {
            setAtTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <div
            className={styles.nav}
            style={{
                top: visible ? "0" : "-70px",
                backgroundColor: atTop ? "" : "rgb(33, 43, 65)",
                transition: ".5s ease-out",
            }}
        >
            <div className={styles.content}>
                <Link
                    className={styles.section}
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    home
                </Link>
                <Link
                    className={styles.section}
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    about me
                </Link>
                <Link
                    className={styles.section}
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    experience
                </Link>
                <Link
                    className={styles.section}
                    to="connect"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    connect
                </Link>
            </div>
        </div>
    );
}
