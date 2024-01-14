"use client";

import styles from "./page.module.css";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef, CSSProperties } from "react";
import { fetchDatePhoto } from "@/utils/fetchDatePhoto";
import ClipLoader from "react-spinners/ClipLoader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ListNamePage = () => {
  const { details } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const element = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: container });

  useEffect(() => {
    fetchDatePhoto(details as string).then((res) => {
      setImage(res);
    });
  }, [details]);

  const handleMouseEnter = contextSafe((e: MouseEvent) => {
    if (element.current !== undefined && element.current !== null) {
      const elementRef = element.current.getBoundingClientRect();
      gsap.to(".info", {
        duration: 0.4,
        x: e.pageX - elementRef.width / 2.5,
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

  const loadedHandler = () => {
    setLoading(false);
  };

  return (
    <div>
      {image ? (
        <div>
          <div
            className={styles.container}
            onMouseMove={handleMouseEnter}
            onMouseOut={handleMouseLeave}
            ref={container}
          >
            <Image
              width={0}
              height={0}
              sizes="100vh"
              style={{ width: "auto", height: "100%" }}
              src={image[`hdurl`]}
              alt={image[`title`]}
              priority
              onLoad={loadedHandler}
            />
            <div className={`info ${styles.info}`} ref={element}>
              <div>
                <strong>Date:</strong> {details}
              </div>
              <p>{image[`explanation`]}</p>
              <p>
                <strong>Title:</strong> {image[`title`]}
              </p>
              <p>
                <strong>Author:</strong> {image[`copyright`]}
              </p>
            </div>
          </div>
        </div>
      ) : null}
      {loading ? (
        <div className={styles.loader}>
          <ClipLoader
            color={"#DD002A"}
            loading={loading}
            cssOverride={override}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : null}
    </div>
  );
};

export default ListNamePage;
