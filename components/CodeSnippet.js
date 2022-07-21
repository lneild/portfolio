import React from "react";
import styles from "../styles/CodeSnippet.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const exampleSQL = `select * from tableX`;
const exampleJS = `const show = () => {
    console.log("hey")}`;
const exampleJsx = `export default function test () {
    return <div>Test</div>
}`;
const codeString = "(num) => num + 1";

export default function CodeSnippet() {
    return (
        <div className={styles.container}>
            <SyntaxHighlighter
                language="sql"
                wrapLines={true}
                showLineNumbers
                style={oneDark}
            >
                {exampleSQL}
            </SyntaxHighlighter>
        </div>
    );
}
