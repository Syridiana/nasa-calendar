'use client'
import { useState } from "react";
import { getMonth } from "../../utils/actions";
import Calendar from "@/components/Calendar/Calendar";


export default function MyCalendar() {
  const [ date, setDate ] =  useState(new Date(2023, 1, 1))
  const [ data, setData ] =  useState([])
  //const date = new Date(2023, 1, 1);
 // const data = await fetchMonth(date);

  return (
    <div>
      <button         onClick={async () => {
          setDate(new Date(2023, 2, 1))
          getMonth(date).then((res) => setData(res))
          
        }}>click</button>
      <Calendar data={data} />
    </div>
  );
}
