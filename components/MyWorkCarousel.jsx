import React, { useState } from "react";
import styles from "../styles/MyWorkCarousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Blob from "./Blob.jsx";
import ChartDisplay from "./ChartDisplay.jsx";
import CodeCard from "./CodeCard";
import ReactCardFlip from "react-card-flip";

const revenueCode = `
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

const activeMembersCode = `select
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

const churnCode = `select
rev_at_t1,
rev_at_t2,
(rev_at_t1 - rev_at_t2) * 100.0 / rev_at_t1 as monthly_churn_rate
from
/* query to get the sum of the prev. month's revenue */
(
  select
    sum(p.payable_price) as rev_at_t1
  from
    payments p
    inner join finalized_payments fp on p.id = fp.payment_id
  where
    /* only want revenue from memberships*/
    p.payable_type = 'MembershipPaymentPeriod'
    /* time frame for the prev month */
    and p.paid_at :: date >= date_trunc('month', cast('{{year}}-{{month}}-01' as date)) - interval '1 month'
    and p.paid_at :: date < date_trunc('month', cast('{{year}}-{{month}}-01' as date))
) as prev_rev
inner join (
  /* query to get the sum of the cur month's revenue */
  select
    sum(p.payable_price) as rev_at_t2
  from
    payments p
    inner join finalized_payments fp on p.id = fp.payment_id
  where
    /* only want revenue from memberships*/
    p.payable_type = 'MembershipPaymentPeriod'
    /* time frame for the current month */
    and p.paid_at :: date >= date_trunc('month', cast('{{year}}-{{month}}-01' as date))
    and p.paid_at :: date < date_trunc('month', cast('{{year}}-{{month}}-01' as date)) + interval '1 month'
) as cur_rev on true`;

const calcCode = `select
total_calculations, 
purchased_from_calculation, 
date_calculated
from
(
  select
    count(c.id) as total_calculations,
    c.created_at::date as date_calculated
  from
    calculations c
  where
    c.payment_estimation is not null
  group by
    c.created_at::date
) as calculated
inner join (
  select
    count(np.id) as purchased_from_calculation,
    np.created_at :: date as date_paid
  from
    notary_products np
    inner join calculations c on c.id = np.calculation_id
  where
    np.paid_at is not null
  group by
    np.created_at :: date
) as purchased on date_calculated = date_paid`;

const revenueGraphs = [
    { src: "/daily_rev.jpg", alt: "daily-revenue", num: 2.9 },
    { src: "/weekly_rev.jpg", alt: "weekly-revenue", num: 2.7 },
    { src: "/monthly_rev.jpg", alt: "montly-revenue", num: 2.7 },
];
const activeMembersGraph = [
    { src: "/members.jpg", alt: "active members", num: 1.9 },
];
const churnGraph = [{ src: "/monthly_churn.jpg", alt: "churn", num: 1.9 }];
const calcGraph = [{ src: "/calculations.jpg", alt: "calculations", num: 1.9 }];

const slideData = [
    {
        graphs: revenueGraphs,
        code: revenueCode,
        description:
            "In this query, we look at all the finalized payments between a certain date range. It also allows the viewer to group all payments so it can see revenue daily, weekly, or monthly. ",
    },
    {
        graphs: activeMembersGraph,
        code: activeMembersCode,
        description:
            "In this query, I had to sum all the members who were created between the given time range that were not on the free package. I also had to account for when a member downgraded to the free option. ",
    },
    {
        graphs: churnGraph,
        code: churnCode,
        description:
            "For this graph, I had to look at the revenue in the given month, and the revenue from the previous month to calculate the churn. The tricky part was going backwards when the given month was January.",
    },
    {
        graphs: calcGraph,
        code: calcCode,
        description:
            "In this graph, I look at how many people get a quota for a product and then how many of those people procede to purchase said product. ",
    },
];

export default function MyWorkCarousel() {
    const [isFlip, setIsFlip] = useState(false);

    const handleClick = () => {
        console.log(!isFlip);
        setIsFlip(!isFlip);
    };

    const allSlides = [];

    slideData.forEach((slide) => {
        allSlides.push(
            <div className={styles.eachSlide}>
                <ReactCardFlip
                    isFlipped={isFlip}
                    flipSpeedBackToFront={0.35}
                    flipSpeedFrontToBack={0.35}
                >
                    <div onClick={() => handleClick()}>
                        <ChartDisplay
                            num={slide.numGraphs}
                            data={slide.graphs}
                        />
                    </div>
                    <div onClick={() => handleClick()}>
                        <CodeCard code={slide.code} />
                    </div>
                </ReactCardFlip>
                <div className={styles.blobDiv}>
                    <Blob description={slide.description} />
                </div>
            </div>
        );
    });
    return (
        <div className={styles.carousel}>
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                transitionTime={1000}
            >
                {allSlides}
            </Carousel>
        </div>
    );
}
