import Hero from "../components/Hero";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Connect from "../components/Connect";
import React from "react";
import styles from "../styles/Index.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.viewWindow}>
            <div className={styles.content}>
                <div className={styles.pic}>
                    <Image
                        src="/header.jpeg"
                        alt="landscape"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <Nav />
                <Hero />
                <AboutMe />
                <Projects />
                <Connect />
            </div>
        </div>
    );
}
