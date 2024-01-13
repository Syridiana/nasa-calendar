import styles from "./page.module.css";
import { fetchMonth } from "../../utils/fetchMonth";
import { useEffect, useState } from "react";
import { PhotoDate } from "../../utils/APITypes/APIResponseType";
import Image from "next/image";
import Calendar from "@/components/Calendar/Calendar";

export default async function MyCalendar() {
  const date = new Date(2023, 11, 1);
  const data = await fetchMonth(date);
  const monthLong = date.toLocaleString("default", { month: "long" });

  return (
    <div>
      <div>
        <h4 className={styles.month}>
          {monthLong} {date.getFullYear()}
        </h4>
        <Calendar data={data} />
      </div>
    </div>
  );
}
