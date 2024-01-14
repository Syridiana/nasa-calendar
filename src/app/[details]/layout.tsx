"use client";

import styles from "./page.module.css";

import { ReactElement, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CalendarLayout = ({ children }: { children: ReactElement }) => {
  const container = useRef<HTMLAnchorElement>(null);

  const { contextSafe } = useGSAP({ scope: container });

  useGSAP(() => {
    gsap.to([".logo", ".subtitle"], {
      duration: 0.5,
      y: -40,
      stagger: 0.1,
      opacity: 1,
      ease: "power1.out",
    });
  });

  const handleMouseEnter = contextSafe((e: MouseEvent) => {
    if (container.current !== undefined && container.current !== null) {
      gsap.to(".arrow", {
        duration: 0.2,
        x: -10,
        ease: "power.out",
      });
    }
  }) as React.MouseEventHandler<HTMLDivElement>;

  const handleMouseLeave = contextSafe((e: MouseEvent) => {
    e.stopPropagation();
    gsap.to(".arrow", {
      duration: 0.2,
      x: 0,
      ease: "power.out",
    });
  }) as React.MouseEventHandler<HTMLDivElement>;

  const handleMouseDown = contextSafe((e: MouseEvent) => {
    e.stopPropagation();
    gsap.to(".arrow", {
      duration: 0.2,
      scale: 0.9,
      ease: "power.out",
    });
  }) as React.MouseEventHandler<HTMLDivElement>;

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
              className={`logo ${styles.logo}`}
            />
            <h2 className={`subtitle ${styles.subtitle}`}>Calendar</h2>
            <Link href="/" style={{ textDecoration: "none" }} ref={container}>
              <Image
                width={50}
                height={50}
                src="/backArrow.svg"
                alt="Back to home"
                className={`arrow ${styles.backArrow}`}
                onMouseMove={handleMouseEnter}
                onMouseOut={handleMouseLeave}
                onMouseDown={handleMouseDown}
              />
            </Link>
          </div>
          <div>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default CalendarLayout;
