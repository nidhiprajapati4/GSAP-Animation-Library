import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalAnimation = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true }));

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

    const rectangles = gsap.utils.selector(horizontal)(".rectangle");
    tl.current.to(rectangles, {
      xPercent: 100,
      duration: 0.5,
      stagger: 0.4,
      repeat: 1,
      yoyo: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handlePlay = () => {
    tl.current.restart();
  };

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
          <div>
            <h2 style={{ color: "#fff" }}>Slide 1</h2>
            <h2 style={{ color: "#084208" }}>Game</h2>

            <div className="rectangle-game">
              <div className="inner-div">
                <div
                  className="rectangle"
                  style={{
                    width: "80%",
                  }}
                ></div>
                <div
                  className="rectangle"
                  style={{
                    width: "60%",
                  }}
                ></div>
                <div
                  className="rectangle"
                  style={{
                    width: "40%",
                  }}
                ></div>
                <div
                  className="rectangle"
                  style={{
                    width: "20%",
                  }}
                ></div>
                <div
                  className="rectangle"
                  style={{
                    width: "10%",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <button id="play" onClick={handlePlay}>
                Play
              </button>
            </div>
          </div>
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
            background: "purple",
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
