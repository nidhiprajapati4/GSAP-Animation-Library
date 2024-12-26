import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.css";
import HorizontalAnimation from "./components/HorizontalAnimation";

const App = () => {
  const boxRef = useRef(null);
  const circleRef = useRef(null);
  const navRef = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: -300 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        borderRadius: "50%",
        ease: "power1.inOut",
        rotate: "100%",
        delay: 1,
        backgroundColor: "orange",
      }
    );
    gsap.fromTo(
      ".box2",
      { opacity: 0, x: 300 },
      {
        opacity: 1,
        x: 0,
        y: -100,
        duration: 1.5,
        borderRadius: "50%",
        ease: "power1.inOut",
        rotate: "100%",
        delay: 1,
        backgroundColor: "#f6f6f6",
      }
    );
    gsap.to(circleRef.current, {
      y: -150,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    tl.to(".title", {
      y: 20,
      opacity: 1,
      duration: 1,
      color: "#65fa65",
    });
    tl.to(".menu h4", {
      y: 20,
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      color: "#65fa65",
    });
    gsap.to(".heading", {
      y: 80,
      duration: 2,
      color: "#65fa65",
    });
  }, [tl]);

  return (
    <div className="App">
      <div className="nav" ref={navRef}>
        <h1 className="title">GSAP</h1>
        <div className="menu">
          <h4>Home</h4>
          <h4>Animation</h4>
          <h4>About</h4>
          <h4>Contact</h4>
        </div>
      </div>
      <h1 className="heading">GSAP Animation in React</h1>
      <div className="box-animation">
        <div className="box" ref={boxRef}></div>
        <div className="box2"></div>
        <div className="circle" ref={circleRef}></div>
      </div>
      <h2 style={{color:"#65fa65"}}>Horizontal Animation</h2>
      <HorizontalAnimation/>
    </div>
  );
};

export default App;
