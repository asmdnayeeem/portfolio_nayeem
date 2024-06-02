import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineComputerDesktop as Hid } from "react-icons/hi2";
import {HiOutlineDevicePhoneMobile as Mid } from "react-icons/hi2";
import {HiOutlineCommandLine as Hib } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
export default function Wai() {
gsap.registerPlugin(ScrollTrigger);
  const wai = useRef<HTMLDivElement>(null);
type details={
  element:any;
  title:String;
  discription:String
}[]
const info:details=[
  {
    element:<Hid size={70} className="scale-[70%] sm:scale-100" color="#66958A" />    ,
    title:"Full Stack Developer",
    discription:"HTML CSS Javascript/Typescript TailwindCSS React.js Next.js Astro.JS Express.js Flask"
  },
  {
    element:<Mid size={70} className="scale-[70%] sm:scale-100" color="#66958A" />    ,
    title:"Flutter Developer",
    discription:"Beginner "
  },
  {
    element:<Hib size={70} className="scale-[70%] sm:scale-100" color="#66958A" />    ,
    title:"Languages and Tools",
    discription:"Python Java C++ Go Postman VSCode Android_Studio Burp_Suit"
  },
]
useGSAP(()=>{
  gsap.from(wai.current,{
    scrollTrigger:{
      trigger:wai.current,
      start:"top 50%",
      end:"bottom 80%",
    },
    duration:1,
    opacity:0,
    scale:0.75,
  })
 
})
    return (
      <div className="bg-[#66958A]">
    <div id="Wai" ref={wai} className=" relative bg-[#66958A]   flex flex-col md:flex-row justify-around md:gap-9 flex-wrap h-[100vh] min-h-[40rem] max-h-[50rem] font-mono  p-5 items-center">
      <div className="font-mono text-[#F0F2F4] font-extrabold text-[2.5rem] md:text-[4rem]">
    Who am I .?
      </div>
      <div className="flex flex-wrap gap-9  flex-col justify-center items-center ">
  
        {info.map((data,index:any)=>(
            <div key={index} className="bg-[#F0F2F4] h-[7rem] sm:h-[8rem] w-[100%]  md:w-[40rem] flex justify-center items-center rounded-sm">
            <div className="w-[20%]">
              {data.element}
            </div>
            <div className="w-[75%] gap-3">
              <p className="text-md sm:text-2xl font-bold">
              {data.title}
                </p>
              <p className="text-sm sm:text-lg md:text-xl text-left font-light">
                {data.discription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
}
