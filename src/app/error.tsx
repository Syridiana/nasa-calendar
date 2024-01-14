"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.errorWrapper}>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "10vw", height: "auto" }}
        src="/NASA.svg"
        alt="NASA logo"
      />
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
