import Card from "./Card";
import { GoArrowUpRight as Gar } from "react-icons/go";
import { HiOutlineComputerDesktop as Hid } from "react-icons/hi2";
import {HiOutlineDevicePhoneMobile as Mid } from "react-icons/hi2";
export default function Projects() {
  return (
    <div className="relative bg-[#F0F2F4]   flex flex-col md:flex-row justify-around gap-9  font-mono  p-5 items-center">
      <div className="font-mono text-[#66958A] font-extrabold text-[2rem] md:text-[4rem]">
My Works.
      </div>
      <div className="flex flex-wrap gap-9  flex-col justify-center items-center ">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}
