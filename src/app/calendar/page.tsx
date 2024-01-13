import styles from "./page.module.css";
import { fetchMonth } from "../../utils/fetchMonth";
import { useEffect, useState } from "react";
import { PhotoDate } from "../../utils/APITypes/APIResponseType";
import Image from "next/image";
import Calendar from "@/components/Calendar";

export default async function MyCalendar() {
  const date = new Date(2023, 11, 1);
  const data = await fetchMonth(date);
  const monthLong = date.toLocaleString("default", { month: "long" });

  return (
    <main className={styles.main}>
      <div className={styles.landingWrapper}>
        <div className={styles.logoWrapper}>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/NASA.svg"
            alt="NASA logo"
          />
          <h2 className={styles.subtitle}>Calendar</h2>
        </div>
        <div>
          <h4 className={styles.month}>
            {monthLong} {date.getFullYear()}
          </h4>
          <Calendar data={data} />
        </div>
      </div>
    </main>
  );
}
