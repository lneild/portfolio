import React, { useState } from "react";
import styles from "../styles/Loading.module.css";
import RingLoader from "react-spinners/RingLoader";

export default function Loading() {
    const [loading, setLoading] = useState(true);

    return <div>Loading</div>;
}
