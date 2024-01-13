"use client";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import placeholder from "../../public/placeholder.png";

import Image from "next/image";

export default function Calendar({ data }) {
  const dateValues = data[0].date.split("-");
  const firstDay = new Date(dateValues[0], dateValues[1] - 1, dateValues[2]);
  const emptySpaces = firstDay.getDay();

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
          return (
            <div className={styles.day} key={image.date}>
              {image.hdurl ? (
                <Image
                  src={image.hdurl}
                  width={95}
                  height={70}
                  alt={image.title}
                  priority={true}
                  quality={70}
                  className={styles.dailyImages}
                />
              ) : (
                <Image src="/" width={100} height={80} alt={image.title} />
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
