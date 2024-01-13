"use client";

import styles from "./styles.module.css";
import { useEffect, useState, useRef } from "react";
import placeholder from "../../public/placeholder.png";

import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Day from "../Day/Day";

export default function Calendar({ data }) {
  const dateValues = data[0].date.split("-");
  const firstDay = new Date(dateValues[0], dateValues[1] - 1, dateValues[2]);
  const emptySpaces = firstDay.getDay();
  const container = useRef();
  const element = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  const handleMouseEnter = contextSafe((e) => {
    console.log("enter");
    const containerRef = container.current.getBoundingClientRect();
    const elementRef = element.current.getBoundingClientRect();

    console.log(element.current);
    gsap.to(".ball", {
      duration: 0.5,
      x: e.pageX - containerRef.left - elementRef.width / 2,
      y: e.pageY - containerRef.top - elementRef.width / 2,
      scale: 1,
    });
  });

  const handleMouseLeave = contextSafe((e) => {
    console.log("leave");
  });

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
