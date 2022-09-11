import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "../styles/Nav.module.css";
import { useNavContext } from "./providers/NavContextProvider";

export default function Nav() {
    const { navEnabled } = useNavContext();
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [atTop, setAtTop] = useState(true);
    const showNav = navEnabled && isScrollingUp;
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsScrollingUp(
                prevScrollPos > currentScrollPos || currentScrollPos < 10
            );
            setPrevScrollPos(currentScrollPos);

            if (currentScrollPos < 50) {
                setAtTop(true);
            } else {
                setAtTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <div
            className={styles.nav}
            style={{
                top: showNav ? "0" : "-70px",
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
