import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
type info = {
  img: String;
  title: String;
  details: String;
  tech:String;
};
export default function Card(data: info) {
  gsap.registerPlugin(ScrollTrigger);
  const card = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(card.current, {
      scrollTrigger: {
        trigger: card.current,
        start: "top 40%",
        end: "bottom 80%",
        scrub: 2,
      },
      duration: 1,
      opacity: 0,
      scale: 0.75,
    });
  })

  return (
    <div ref={card} className="group  relative flex  flex-col  gap-5 justify-center items-center rounded-lg ">
      <img
        src={String(data.img)}
        alt=""
        className="w-full max-w-[40rem] content-center rounded-lg group-hover:shadow-xl  group-hover:shadow-[#66958A] duration-500"
      />
      <div className="max-w-[40rem] flex flex-col h-[80%] flex-wrap gap-2 justify-start ">
      <p className="text-md sm:text-2xl font-semibold">
          {data.title}
        </p>
        <p>
          {data.details}
          </p>
          <p className="text-md sm:text-lg font-semibold">
          Tech Stack:
          <span className="pl-2  text-md font-normal">
           {data.tech}
          </span>
          </p>
      </div>
    </div>
  );
}
