"use client";

import styles from "./page.module.css";

import Image from "next/image";

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
      <p>Error: {error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
