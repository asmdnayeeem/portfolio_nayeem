import { useGSAP } from "@gsap/react";
import { useState } from "react";
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
        gsap.from(first.current,{
            scrollTrigger:{
                trigger:'.box',
                scrub:2
            },
            scale:0,
            delay:1,
            duration:1,
            rotate:360

        })
        gsap.to(first.current,{
            scrollTrigger:'.box',
            x:500,
            duration:2,
            delay:1,
            rotate:-200,
        })
    }
,[circle])
  return (
    <div ref={con} className="app">
        <div className="h-[100vh] bg-black"></div>
        <div className="h-[100vh] bg-black">

        </div>
      <div ref={first} className="box  w-[30rem] h-[30rem] bg-red-200 "></div>
        <button onClick={()=>setcircle(random)}> CLivck me</button>
        <div className="h-[100vh] bg-black"></div>
    </div>
  );
}
