"use client";

import { fetchDatePhoto } from "@/utils/fetchDatePhoto";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ListNamePage = () => {
  const { details } = useParams();
  const [image, setImage] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const container = useRef();
  const element = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  useEffect(() => {
    fetchDatePhoto(details).then((res) => {
      setImage(res);
      setLoading(false);
    });
  }, []);

  const handleMouseEnter = contextSafe((e) => {
    const containerRef = container.current.getBoundingClientRect();
    const elementRef = element.current.getBoundingClientRect();
    gsap.to(".info", {
      duration: 0.4,
      x: e.pageX - elementRef.width / 2,
      y: e.pageY - elementRef.height * 2,
      opacity: 1,
    });
  });

  const handleMouseLeave = contextSafe((e) => {
    e.stopPropagation();
    gsap.to(".info", {
      duration: 0.4,
      opacity: 0,
    });
  });
  return (
    <div>
      {image ? (
        <div>
          <div
            style={{
              width: "auto",
              height: "90vh",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseMove={handleMouseEnter}
            onMouseOut={handleMouseLeave}
            ref={container}
          >
            <Image
              width={0}
              height={0}
              sizes="100vh"
              style={{ width: "auto", height: "100%", maxWidth: "100%" }}
              src={image[`hdurl`]}
              alt={image[`title`]}
            />
            <div
              className="info"
              ref={element}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                padding: "10%",
                color: "white",
              }}
            >
              <div>Date: {details} </div>
              <p>{image[`explanation`]}</p>
              <p>{image[`title`]}</p>
              <p>{image[`copyright`]}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ListNamePage;
