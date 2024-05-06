import Card from "./Card";
import { GoArrowUpRight as Gar } from "react-icons/go";
import { HiOutlineComputerDesktop as Hid } from "react-icons/hi2";
import {HiOutlineDevicePhoneMobile as Mid } from "react-icons/hi2";
export default function Wai() {
  return (
    <div className=" bg-[#66958A]   flex flex-col md:flex-row justify-around md:gap-9  font-mono h-[100vh] p-5 items-center">
      <div className="font-mono text-white font-extrabold text-[2.5rem] md:text-[4rem]">
    Who am I .?
      </div>
      <div className="flex flex-wrap gap-9  flex-col justify-center items-center ">
    
        <div className="bg-[#F0F2F4] h-[8rem] w-[28rem]  md:w-[40rem] flex justify-center items-center">
          <div className="w-[20%]">
            <Hid size={70} color="#66958A" />
          </div>
          <div className="w-[70%] gap-3">
            <p className="text-xl sm:text-2xl font-semibold">Web Developer</p>
            <p className="sm:text-xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore numquam nesciunt ab.
            </p>
          </div>
          <Gar size={50} color="#66958A" />
        </div>
    
        <div className="bg-[#F0F2F4] h-[8rem] w-[28rem]  md:w-[40rem] flex justify-center items-center">
          <div className="w-[20%]">
            <Hid size={70} color="#66958A" />
          </div>
          <div className="w-[70%] gap-3">
            <p className="text-xl sm:text-2xl font-semibold">Web Developer</p>
            <p className="sm:text-xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore numquam nesciunt ab.
            </p>
          </div>
          <Gar size={50} color="#66958A" />
        </div>
    
        <div className="bg-[#F0F2F4] h-[8rem] w-[28rem]  md:w-[40rem] flex justify-center items-center">
          <div className="w-[20%]">
            <Hid size={70} color="#66958A" />
          </div>
          <div className="w-[70%] gap-3">
            <p className="text-xl sm:text-2xl font-semibold">Web Developer</p>
            <p className="sm:text-xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore numquam nesciunt ab.
            </p>
          </div>
          <Gar size={50} color="#66958A" />
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
