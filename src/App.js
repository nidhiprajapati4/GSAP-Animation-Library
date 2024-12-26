import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.css";

const App = () => {
  const boxRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Animate the box
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1 }
    );

    // Animate the circle with a delay
    gsap.to(circleRef.current, {
      y: -50,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="App">
      <h1>GSAP Animation in React</h1>
      <div className="box" ref={boxRef}>
        I am a Box
      </div>
      <div className="circle" ref={circleRef}></div>
    </div>
  );
};

export default App;
