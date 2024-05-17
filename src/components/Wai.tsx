// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
import { GoArrowUpRight as Gar } from "react-icons/go";
import { HiOutlineComputerDesktop as Hid } from "react-icons/hi2";
import {HiOutlineDevicePhoneMobile as Mid } from "react-icons/hi2";
export default function Wai() {
    // const {ref:wai ,inView:inView,entry}=useInView({threshold:0.8,fallbackInView:true,delay:1000})
    // // useEffect(() => {
    // //     const navbar: HTMLElement | any = document.getElementById('navbar');       
    // //      if (inView) {
    // //       navbar.classList.remove("sticky");
    // //       navbar.classList.add("fixed");
    // //     }
    // //   }, [inView]);
    return (
    <div id="Wai" className=" relative bg-[#66958A]   flex flex-col md:flex-row justify-around md:gap-9 flex-wrap h-[100vh] min-h-[40rem] font-mono  p-5 items-center">
      <div className="font-mono text-[#F0F2F4] font-extrabold text-[2.5rem] md:text-[4rem]">
    Who am I .?
      </div>
      <div className="flex flex-wrap gap-9  flex-col justify-center items-center ">
    
        <div className="bg-[#F0F2F4] h-[7rem] sm:h-[8rem] w-[100%]  md:w-[40rem] flex justify-center items-center">
          <div className="w-[20%]">
            <Hid size={70} className="scale-[70%] sm:scale-100" color="#66958A" />
          </div>
          <div className="w-[70%] gap-3">
            <p className="text-md sm:text-2xl font-semibold">
              Full Stack Developer</p>
            <p className="text-sm sm:text-lg md:text-xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore numquam nesciunt ab.
            </p>
          </div>
          {/* <Gar size={50} color="#66958A" /> */}
        </div>
    
        <div className="bg-[#F0F2F4] h-[7rem] sm:h-[8rem] w-[100%]  md:w-[40rem] flex justify-center items-center">
          <div className="w-[20%]">
          <Mid size={70} className="scale-[70%] sm:scale-100" color="#66958A" />
          </div>
          <div className="w-[70%] gap-3">
          <p className="text-md sm:text-2xl font-semibold">
              Flutter Developer</p>
            <p className="text-sm sm:text-lg md:text-xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore numquam nesciunt ab.
            </p>
          </div>
        </div>
    
        <div className="bg-[#F0F2F4] h-[7rem] sm:h-[8rem] w-[100%]  md:w-[40rem] flex justify-center items-center">
          <div className="w-[20%]">
          <Hid size={70} className="scale-[70%] sm:scale-100" color="#66958A" />
          </div>
          <div className="w-[70%] gap-3">
          <p className="text-md sm:text-2xl font-semibold">
              DevOps Enthusiastic</p>
            <p className="text-sm sm:text-lg md:text-xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore numquam nesciunt ab.
            </p>
          </div>
        </div> 

        {/* <div className="bg-[#F0F2F4] h-[8rem] w-[40rem] flex justify-center items-center">
          <div className="w-[20%]">
            <Mid size={70} color="#66958A" />
          </div>
          <div className="w-[70%] gap-3">
            <p className="text-2xl font-semibold">Flutter Developer</p>
            <p className="text-xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore numquam nesciunt ab.
            </p>
          </div>
          <Gar size={50} color="#66958A" />
        </div>
        <div className="bg-[#F0F2F4] h-[8rem] w-[40rem] flex justify-center items-center">
          <div className="w-[20%]">
            <Hid size={70} color="#66958A" />
          </div>
          <div className="w-[70%] gap-3">
            <p className="text-2xl font-semibold">DevOps Enthusiastic</p>
            <p className="text-xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore numquam nesciunt ab.
            </p>
          </div>
          <Gar size={50} color="#66958A" />
        </div> */}
      </div>
    </div>
  );
}
