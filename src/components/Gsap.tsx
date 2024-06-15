import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import '../main.css'
import SplitType from 'split-type'
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/all";
export default function App() {
  gsap.registerPlugin(ScrollTrigger) 
  // gsap.registerPlugin(TextPlugin);
  
  const [circle, setcircle] = useState<Number>(0);
  const first: any = useRef();
  const con: any = useRef();
  const random = gsap.utils.random(-500, 500, 100);
  const [windowWidth, setWindowWidth] = useState<any>(window.innerWidth);
  const text=new SplitType('#text')
  useGSAP(() => {
    gsap.to(first.current, {
      scrollTrigger: {
        trigger: con.current,
        scroller: "body",
        start: "top 0%",
        end: "top -300%",
        pin: true,
        markers: true,
        scrub: 0.5,
      },
      text:"hi",
      transform: `translateX(${-(3*windowWidth)}px)`,
      delay: 1,
    });
    
    gsap.to('.char',{
      y:0,
      stagger:0.05,
      delay:0.2,
      duration:0.1,
      rotationZ:360
    
    })
  }, [circle,windowWidth]);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);
  return (
    <div className="app">
      <div id="head" className="h-[100vh] bg-black grid place-content-center">
      <h1 id="text" className="head text-[7rem] text-white font-mono">
        Hello World
      </h1>
      </div>
      <div
        ref={con}
        className="   bg-slate-200 overflow-x-hidden h-[100vh] flex-row"
      >
        <div
          ref={first}
          style={{ width: 4 * windowWidth }}
          className="grid grid-cols-4 h-[100vh] bg-red-400"
        >
          <div
            style={{ width: windowWidth }}
            className="box w-[200rem] h-[100vh] bg-green-400  font-bold text-[5rem] flex justify-center items-center "
          >
            Who am i
          </div>
          <div
            style={{ width: windowWidth }}
            className="box w-[200rem] h-[100vh] bg-yellow-400 font-bold text-[5rem] flex justify-center items-center "
          >
            Full Stack Developer
          </div>
          <div
            style={{ width: windowWidth }}
            className="box w-[200rem] h-[100vh] bg-blue-400   font-bold text-[5rem] flex justify-center items-center "
          >
            Flutter Developer
          </div>
          <div
            style={{ width: windowWidth }}
            className="box w-[200rem] h-[100vh] bg-pink-400   font-bold text-[5rem] flex justify-center items-center "
          >
            Languages and Tools
          </div>
        </div>
      </div>
      <div className="h-[100vh] bg-black"></div>
    </div>
  );
}
