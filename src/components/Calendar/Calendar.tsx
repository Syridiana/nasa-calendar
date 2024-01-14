"use client";

import styles from "./styles.module.css";

import Day from "../Day/Day";
import { PhotoDateI } from "@/app/interfaces/PhotoDateI";

export default function Calendar({ data }: { data: PhotoDateI[] }) {
  const dateValues = data[0].date.split("-");
  const firstDay = new Date(
    parseInt(dateValues[0]),
    parseInt(dateValues[1]) - 1,
    parseInt(dateValues[2])
  );
  const emptySpaces = firstDay.getDay();
  const monthLong = firstDay.toLocaleString("en-GB", { month: "long" });

  return (
    <div className={styles.calendarBox}>
      <h4 className={styles.month}>
        {monthLong} {firstDay.getFullYear()}
      </h4>
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
    </div>
  );
}
