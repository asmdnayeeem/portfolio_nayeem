import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
export default function Navbar() {
  const { ref: nav, inView: inView } = useInView();
  const [isOpen, setOpen]: any = useState(false);
  useEffect(() => {
    const navbar: HTMLElement | any = document.getElementById("navbar");
    const nav: HTMLElement | any = document.getElementById("nav");
    const sidenav: HTMLElement | any = document.getElementById("sidenav");
    if (isOpen) {
      sidenav.classList.add("w-[100%]");
      sidenav.classList.add("opacity-100");
      sidenav.classList.remove("w-0");
    } else {
      sidenav.classList.remove("opacity-100");
      sidenav.classList.remove("w-[100%]");
      sidenav.classList.add("w-0");
    }
    if (inView) {
      navbar.classList.add("opacity-0");
      navbar.classList.remove("opacity-100");
      nav.classList.add("opacity-100");
    } else {
      navbar.classList.remove("opacity-0");
      navbar.classList.add("opacity-100");
      nav.classList.add("opacity-0");
    }
  }, [inView, isOpen]);

  const openNav = () => {
    console.log(isOpen);

    setOpen(true);
  };
  return (
    <div className="relative top-0">
      <div
        className="fixed font-mono items-center top-0 bg-[#66958A] h-[100vh] z-20  gap-9 flex p-5 flex-col duration-700 opacity-0"
        id="sidenav"
      >
        <AiOutlineClose
          size={40}
          color="#F0F2F4"
          className="self-end"
          onClick={() => setOpen(false)}
        />
        <h2 className="text-3xl text-[#F0F2F4]">Home</h2>
        <h2 className="text-3xl text-[#F0F2F4]">Who am I .?</h2>
        <h2 className="text-3xl text-[#F0F2F4]">My Works.</h2>
        <h2 className="text-3xl text-[#F0F2F4]">Let's Connect</h2>
        
      </div>
      <div
        ref={nav}
        id="nav"
        className="z-10 sticky top-0 text-[#66958A] font-mono font-bold text-2xl text-start w-[100%] p-5 pl-10 bg-[#F0F2F4] duration-700"
      >
        <div className="flex justify-between items-center">
          <h1>Nayeem.</h1>
          <button onClick={openNav}>
            <div className=" right-0 flex flex-col gap-2">
              <div className="w-[1.8rem] h-[0.2rem] bg-[#66958A]  "></div>
              <div className="w-[2.1rem] h-[0.2rem] bg-[#66958A]  "></div>
            </div>
          </button>
        </div>
      </div>
      <div
        id="navbar"
        className="z-10 fixed top-0 text-[#F0F2F4] font-mono font-bold text-2xl text-start w-[100%] p-5 pl-10 bg-[#66958A] opacity-0 duration-700 shadow-md"
      >
        <div className="flex justify-between items-center">
          <h1>Nayeem.</h1>
          <button onClick={openNav}>
            <div className=" right-0 flex flex-col gap-2">
              <div className="w-[1.8rem] h-[0.2rem] bg-[#F0F2F4]  "></div>
              <div className="w-[2.1rem] h-[0.2rem] bg-[#F0F2F4]  "></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
