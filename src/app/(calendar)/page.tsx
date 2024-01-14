import { fetchMonth } from "../../utils/fetchMonth";
import Calendar from "@/components/Calendar/Calendar";

export default async function MyCalendar() {
  const date = new Date(2023, 1, 1);
  const data = await fetchMonth(date);

  return (
    <div>
      <Calendar data={data} />
    </div>
  );
}
