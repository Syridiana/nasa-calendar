import { ReactElement } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const CalendarLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div style={{ width: "90%", maxWidth: "1500px", margin: "auto" }}>
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
            <h3 className={styles.secondSubtitle}>
              Astronomy Picture of the Day
            </h3>
          </div>
          <div>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default CalendarLayout;
