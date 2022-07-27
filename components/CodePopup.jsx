import React from "react";
import styles from "../styles/CodePopup.module.css";
import CodeSnippet from "./CodeSnippet";

const revenue = `select
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

const code2 = `select
  members_paying.created_at :: date,
  sum(cumulative) over (
    order by
      members_paying.created_at
  )
from
  (
    select
      sum(total) cumulative,
      paying.created_at :: date
    from
      (
        /* users who never downgrade - null downgrade_membership_to_type_id*/
        select
          count(cm.id) total,
          cm.created_at :: date
        from
          current_memberships cm
          inner join membership_types mt on cm.membership_type_id = mt.id
        where
          mt.price != 0.00
          and cm.downgrade_membership_to_type_id is null
        group by
          cm.created_at :: date
        union all
          /* users who downgrade*/
        select
          sum(
            case
              when mt.price = 0.00 then -1
              /* downgrade to free = now we need to remove them*/
              else 1
              /* downgrade to a payment - we still need to count them because they were not counted above*/
            end
          ) as downgrade_occured,
          cm.created_at :: date
        from
          current_memberships cm
          inner join membership_types mt on cm.downgrade_membership_to_type_id = mt.id
        where
          cm.downgrade_membership_to_type_id is not null
          and cm.membership_type_id != cm.downgrade_membership_to_type_id
        group by
          cm.created_at :: date
      ) as paying
    group by
      paying.created_at :: date
    order by
      paying.created_at :: date asc
  ) as members_paying
where
  members_paying.created_at :: date between '{{start}}'
  and '{{end}}'
  /* note - we do not check when membership_type_id = downgrade_membership_to_type_id,
    it is not necesary since that only happens when it is 1 (free membership) */`;

export default function CodePopup(props) {
    return (
        <div>
            <div className={styles.viewWindow}>
                <div className={styles.card}>
                    <div
                        className={styles.close}
                        onClick={(e) => {
                            e.preventDefault();
                            props.handleClose();
                        }}
                    >
                        X
                    </div>
                    <div className={styles.title}>HEY</div>
                    <CodeSnippet code={revenue} />
                </div>
            </div>
        </div>
    );
}
