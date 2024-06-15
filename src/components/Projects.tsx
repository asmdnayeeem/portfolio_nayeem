import Card from "./Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import flex from "../images/flex.png?url"
import vulcanzy from "../images/vulcanzy.png?url"
import go from "../images/go.png?url"
//import lma from "../images/lma.png?url"


export default function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  const card = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(card.current, {
      scrollTrigger: {
        trigger: card.current,
        start: "top 80%",
      },
      duration: 1,
      opacity: 0,
      scale: 0.75,
    });
  })

  type info = {
    img: String;
    link: string;
    title: String
    details: String;
    tech: String;
  }[];
  const data: info = [
    {
      img: flex,
      link: "https://www.flexfever.in/",
      title: "Flex Fever",
      details: "Designed the promotional website for Flex Fever, a custom apparel company specializing in personalized t-shirts, hoodies, and other garments",
      tech: "React.js, TailwinCSS"
    },
    {
      img: vulcanzy,
      link: "https://vulcanzy-2024.vercel.app/",
      title: "Vulcanzy 2024",
      details: "Coordinated Vulcanzy 2024, the annual cultural fest at NIT Andhra Pradesh , working closely with a team of four members to develop and launch the event’s website.",
      tech: "React.js, TailwinCSS"

    },
    {
      img: go,
      link: "https://github.com/asmdnayeeem/go_backend",
      title: "Go Authentication and Authorization Server",
      details: "Developed a robust authentication and authorization server using Go, providing secure access control for various applications",
      tech: "Go (Golang), JWT ,Bcrypt, PostgreSQL, RESTFUL API"
    },
  ];

  return (
    <div
      id="myworks"
      className="relative bg-[#F0F2F4]   flex flex-col  justify-around gap-9  font-mono  p-5 items-center"
    >
      <div className="font-mono relative text-[#66958A] font-extrabold text-[2.5rem] md:text-[4rem] self-start ">
        My Works.
      </div>
      <div ref={card} className="grid md:grid-cols-2 gap-9 justify-items-center  w-full ">
        {data.map((item, index: any) => (
          <div key={index}>
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
