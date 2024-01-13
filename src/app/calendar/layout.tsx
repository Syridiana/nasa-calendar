import { ReactElement } from "react";

const CalendarLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div style={{ width: "90%", maxWidth: "1500px", margin: "auto" }}>
      <div>{children}</div>
    </div>
  );
};

export default CalendarLayout;
