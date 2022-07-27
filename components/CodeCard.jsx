import React from "react";
import CodeSnippet from "./CodeSnippet";
import styles from "../styles/CodeCard.module.css";

export default function CodeCard(props) {
    return (
        <div className={styles.glossOver}>
            <div className={styles.codeSection}>
                <CodeSnippet code={props.code} />
            </div>
        </div>
    );
}
