import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/TypingText.module.css";

export default function TypingText(props) {
    const FORWARD = "forward";
    const BACKWARD = "backward";

    const useTypingText = (words, keySpeed = 1000, maxPauseAmount = 10) => {
        const [wordIndex, setWordIndex] = useState(0);
        const [currentWord, setCurrentWord] = useState(
            words[wordIndex].split("")
        );
        const [isStopped, setIsStopped] = useState(false);

        const direction = useRef(BACKWARD);
        const typingInterval = useRef();
        const letterIndex = useRef();

        const stop = () => {
            clearInterval(typingInterval.current);
            setIsStopped(true);
        };

        useEffect(() => {
            // Start at 0
            let pauseCounter = 0;

            // if we want it to type...
            if (isStopped) return;

            // type a letter
            const typeLetter = () => {
                // if typed the word, need to switch direction
                if (letterIndex.current >= words[wordIndex].length) {
                    direction.current = BACKWARD;

                    // Begin pause by setting the maxPauseAmount prop equal to the counter
                    pauseCounter = maxPauseAmount;
                    return;
                }

                // split word into letters array
                const segment = words[wordIndex].split("");

                // update new state value
                setCurrentWord(
                    currentWord.concat(segment[letterIndex.current])
                );
                letterIndex.current = letterIndex.current + 1;
            };

            // backspace a letter
            const backspace = () => {
                // check if backspaced the entire word - switch direction
                if (letterIndex.current === 0) {
                    const isOnLastWord = wordIndex === words.length - 1;
                    setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
                    direction.current = FORWARD;
                    // rest of backspace function should stop
                    return;
                }
                // update word to be 1 less letter
                const segment = currentWord.slice(0, currentWord.length - 1);

                // update new state value
                setCurrentWord(segment);
                letterIndex.current = currentWord.length - 1;
            };

            // run on an interval
            typingInterval.current = setInterval(() => {
                // Wait until counter hits 0 to do any further action
                if (pauseCounter > 0) {
                    pauseCounter = pauseCounter - 1;
                    return;
                }

                if (direction.current === FORWARD) {
                    typeLetter();
                } else {
                    backspace();
                }
            }, keySpeed);

            return () => {
                clearInterval(typingInterval.current);
            };
        }, [
            currentWord,
            wordIndex,
            keySpeed,
            words,
            isStopped,
            maxPauseAmount,
        ]);

        return {
            text: (
                <span className={`${currentWord.length ? "" : styles.empty}`}>
                    <span>
                        {currentWord.length ? currentWord.join("") : "0"}
                        <div className={styles.cursor}></div>
                    </span>
                </span>
            ),
            start: () => setIsStopped(false),
            stop,
        };
    };

    const { text, stop, start } = useTypingText(
        props.text,
        props.stop,
        props.start
    );

    return <h2 className={styles.word}>{text}</h2>;
}
