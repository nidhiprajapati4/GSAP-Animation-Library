import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const VerticalAnimation = () => {
  const boxRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const containerHeight = containerRef.current.offsetHeight;

    gsap.fromTo(
      boxRef.current,
      { y: 0 }, 
      { y: containerHeight, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" } 
    );
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: "100vh", overflow: "hidden", position: "relative", background: "#f0f0f0" }}
    >
      <div
        ref={boxRef}
        style={{
          width: "50px",
          height: "50px",
          background: "blue",
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
};

export default VerticalAnimation;
