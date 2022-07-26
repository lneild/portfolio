import React, { useState, useEffect } from "react";
import styles from "../styles/Blob.module.css";
import CodePopup from "../components/CodePopup";

const revenue = `
select
  sum(p.payable_price) as amount,
  date_trunc('{{frequency}}', p.paid_at :: date) as date
from
  payments p
  inner join finalized_payments fp on p.id = fp.payment_id
where
  p.paid_at between '{{ start }}'
  and '{{ end }}'
group by
  date_trunc('{{frequency}}', p.paid_at :: date)`;

export default function Blob(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        if (isOpen) {
            document.getElementById("header").style.display = "none";
        } else {
            document.getElementById("header").style.display = "flex";
        }
    }, [isOpen]);

    return (
        <div>
            {isOpen && <CodePopup handleClose={handleClose} code={revenue} />}
            <div className={styles.blob}>
                <div className={styles.text}>{props.description}</div>
            </div>
        </div>
    );
}
