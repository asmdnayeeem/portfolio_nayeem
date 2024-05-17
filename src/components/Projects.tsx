import Card from "./Card";
import { GoArrowUpRight as Gar } from "react-icons/go";
import { HiOutlineComputerDesktop as Hid } from "react-icons/hi2";
import {HiOutlineDevicePhoneMobile as Mid } from "react-icons/hi2";
export default function Projects() {
  return (
    <div id="myworks" className="relative bg-[#F0F2F4]   flex flex-col  justify-around gap-9  font-mono  p-5 items-center">
      <div className="font-mono relative text-[#66958A] font-extrabold text-[2.5rem] md:text-[4rem] self-start ">
My Works.
      </div>
      <div className="flex flex-wrap flex-col gap-9 justify-center items-center w-full ">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}
