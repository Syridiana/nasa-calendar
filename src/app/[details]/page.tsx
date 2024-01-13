"use client";

import { fetchDatePhoto } from "@/utils/fetchDatePhoto";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ListNamePage = () => {
  const { details } = useParams();
  const [image, setImage] = useState(null);
  const container = useRef<HTMLDivElement>(null);
  const element = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: container });

  useEffect(() => {
    fetchDatePhoto(details as string).then((res) => {
      setImage(res);
    });
  }, []);

  const handleMouseEnter = contextSafe((e: MouseEvent) => {
    if (element.current !== undefined && element.current !== null) {
      const elementRef = element.current.getBoundingClientRect();
      gsap.to(".info", {
        duration: 0.4,
        x: e.pageX - elementRef.width / 2,
        y: e.pageY - elementRef.height * 2,
        opacity: 1,
      });
    }
  }) as React.MouseEventHandler<HTMLDivElement>;

  const handleMouseLeave = contextSafe((e: MouseEvent) => {
    e.stopPropagation();
    gsap.to(".info", {
      duration: 0.4,
      opacity: 0,
    });
  }) as React.MouseEventHandler<HTMLDivElement>;

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
