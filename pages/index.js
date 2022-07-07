// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
// import Ripple from "../components/Ripple";
import React from "react";

export default function Home() {
    return (
        <div>
            {/* <Ripple /> */}
            <Card src="/header.jpeg" />
            <Nav />

            <AboutMe src="/peru.jpg" />
        </div>
    );
}
