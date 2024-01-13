"use client";

import styles from "./styles.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Day from "../Day/Day";
import { PhotoDate } from "@/utils/APITypes/APIResponseType";
import { useRef } from "react";

export default function Calendar({ data }: { data: PhotoDate[] }) {
  const dateValues = data[0].date.split("-");
  const firstDay = new Date(
    parseInt(dateValues[0]),
    parseInt(dateValues[1]) - 1,
    parseInt(dateValues[2])
  );
  const emptySpaces = firstDay.getDay();
  const container = useRef();
  const element = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.weekday}>Sun</div>
      <div className={styles.weekday}>Mon</div>
      <div className={styles.weekday}>Tue</div>
      <div className={styles.weekday}>Wed</div>
      <div className={styles.weekday}>Thu</div>
      <div className={styles.weekday}>Fri</div>
      <div className={styles.weekday}>Sat</div>
      {[...Array(emptySpaces)].map((x, i) => (
        <div className="emptyDay" key={i}></div>
      ))}
      {!data.length ? (
        <h1>No Images Found</h1>
      ) : (
        data.map((image) => {
          return <Day image={image} key={image.date} />;
        })
      )}
    </div>
  );
}
