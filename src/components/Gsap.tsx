import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function App() {
    gsap.registerPlugin(ScrollTrigger) 
    const [circle, setcircle] = useState<Number>(0);
    const first:any = useRef()
    const con:any=useRef();
    const random =gsap.utils.random(-500,500,100)
    useGSAP(()=>{
        gsap.to(first.current,{
            scrollTrigger:{
                trigger:con.current,
                scroller:"body",
                start:"top 0%",
                end:"top -100%",
                pin:true,
                markers:true,
                scrub:0.5,  },
            transform:"translateX(-100%)",
            delay:1

        })
    }
,[circle])
const [windowWidth, setWindowWidth] = useState<any>(window.innerWidth);
useEffect(() => {
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);  
return (
    <div  className="app">
      <div className="h-[100vh] bg-black"></div>
        <div ref={con}  className="   bg-slate-200 overflow-x-hidden h-[100vh] flex-row">
            <div ref={first} style={{width:4*windowWidth}} className="grid grid-cols-4 h-[100vh] bg-red-400">

            <div style={{width:windowWidth}} className="w-[200rem] h-[100vh] bg-green-400  font-bold text-[30rem] flex justify-center items-center ">T</div>
            <div style={{width:windowWidth}} className="w-[200rem] h-[100vh] bg-yellow-400 font-bold text-[30rem] flex justify-center items-center ">E</div>
            <div style={{width:windowWidth}} className="w-[200rem] h-[100vh] bg-blue-400   font-bold text-[30rem] flex justify-center items-center ">D</div>
            <div style={{width:windowWidth}} className="w-[200rem] h-[100vh] bg-pink-400   font-bold text-[30rem] flex justify-center items-center ">x</div>
            </div>
        </div>
      <div className="h-[100vh] bg-black"></div>
    </div>
  );
}
