"use client";

import styles from "./styles.module.css";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PhotoDate } from "@/utils/APITypes/APIResponseType";

export default function Day({ image }: { image: PhotoDate }) {
  const container = useRef<HTMLDivElement>(null);
  const element = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: container });

  const handleMouseEnter = contextSafe((e: MouseEvent) => {
    if (
      container.current !== undefined &&
      container.current !== null &&
      element.current !== undefined &&
      element.current !== null
    ) {
      const containerRef = container.current.getBoundingClientRect();
      const elementRef = element.current.getBoundingClientRect();
      gsap.to(".ball", {
        duration: 0.4,
        x: e.pageX - containerRef.left - elementRef.width / 2,
        y: e.pageY - containerRef.top - elementRef.height / 2,
        scale: 1,
      });
    }
  }) as React.MouseEventHandler<HTMLDivElement>;

  const handleMouseLeave = contextSafe((e: MouseEvent) => {
    e.stopPropagation();
    gsap.to(".ball", {
      duration: 0.4,
      scale: 0,
    });
  }) as React.MouseEventHandler<HTMLDivElement>;

  const handleMouseDown = contextSafe((e: MouseEvent) => {
    e.stopPropagation();
    gsap.to(".ball", {
      duration: 0.4,
      scale: 3,
    });
  }) as React.MouseEventHandler<HTMLDivElement>;

  return (
    <Link
      key={image.date}
      href={`/${image.date}`}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.day} ref={container}>
        {image.hdurl ? (
          <Image
            src={image.hdurl}
            width={95}
            height={70}
            alt={image.title}
            priority={true}
            quality={70}
            className={styles.dailyImages}
          />
        ) : (
          <Image
            src="/placeholder.jpg"
            width={95}
            height={70}
            alt={image.title}
          />
        )}
        <div
          style={{
            backgroundColor: "#DD002A",
            width: "100px",
            height: "100px",
            position: "absolute",
            top: "0",
            left: "0",
            borderRadius: "350px",
            transformOrigin: "center center",
            transform: "scale(0)",
            mixBlendMode: "hard-light",
          }}
          ref={element}
          className="ball"
        ></div>
        <h6 className={styles.date}>{image.date.split("-")[2]}</h6>
        <div
          onMouseMove={handleMouseEnter}
          onMouseOut={handleMouseLeave}
          onMouseDown={handleMouseDown}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </Link>
  );
}
