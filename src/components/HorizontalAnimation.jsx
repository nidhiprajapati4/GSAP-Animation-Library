import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalAnimation = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    const horizontalWidth = horizontal.scrollWidth - container.offsetWidth;

    gsap.to(horizontal, {
      x: -horizontalWidth, 
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${horizontalWidth}`,
        scrub: true,
        pin: true, 
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        ref={horizontalRef}
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <div
          style={{
            flex: "0 0 100%",
            background: "orange",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          Slide 1
        </div>
        <div
          style={{
            flex: "0 0 100%",
            background: "#2196f3",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          Slide 2
        </div>
        <div
          style={{
            flex: "0 0 100%",
            background: "#4caf50",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          Slide 3
        </div>
      </div>
    </div>
  );
};

export default HorizontalAnimation;
