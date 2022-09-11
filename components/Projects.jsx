import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Projects.module.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div id="projects" className={styles.experience}>
            <div className={styles.pic}>
                <Image
                    src="/txture.jpg"
                    alt="Water"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            <div className={styles.content}>
                <div className={styles.title}>WORK</div>

                <div className={styles.projects}>
                    <Link href="/ligo">
                        <div className={styles.card}>
                            <ProjectCard
                                title="Ligo"
                                date="'22"
                                src="/amsterdam.jpg"
                            />
                        </div>
                    </Link>
                    <Link className={styles.card} href="/rockefeller">
                        <div className={styles.card}>
                            <ProjectCard
                                title="Rockefeller"
                                date="'20"
                                src="/nyc.jpg"
                            />
                        </div>
                    </Link>
                    {/* <div className={styles.card}>
                        <ProjectCard
                            title="Ligo"
                            date="'22"
                            src="/amsterdam.jpg"
                        />
                    </div>
                    <div className={styles.card}>
                        <ProjectCard
                            title="Rockefeller"
                            date="'20"
                            src="/nyc.jpg"
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
}
