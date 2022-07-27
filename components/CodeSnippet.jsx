import React from "react";
import styles from "../styles/CodeSnippet.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeSnippet(props) {
    return (
        <div className={styles.container}>
            <SyntaxHighlighter
                language="sql"
                wrapLines={true}
                showLineNumbers
                style={oneDark}
            >
                {props.code}
            </SyntaxHighlighter>
        </div>
    );
}
