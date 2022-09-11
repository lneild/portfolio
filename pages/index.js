import React, { useState, createContext, useContext } from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Connect from "../components/Connect";
import styles from "../styles/Index.module.css";
import { NavContextProvider } from "../components/providers/NavContextProvider";

export default function Home() {
    return (
        <NavContextProvider>
            <div className={styles.viewWindow}>
                <div className={styles.content}>
                    <Nav />
                    <Hero />
                    <AboutMe />
                    <Projects />
                    <Connect />
                </div>
            </div>
        </NavContextProvider>
    );
}
