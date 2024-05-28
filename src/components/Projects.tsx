import Card from "./Card";
import first from "../images/Screenshot 2023-09-02 153332.png?url";
export default function Projects() {
type info={
    img: String;
    title:String
    details: String;
    tech:String;
}[];
const data: info = [
    {
      img: first,
      title:"Flex Fever",
      details:"Designed the promotional website for Flex Fever, a custom apparel company specializing in personalized t-shirts, hoodies, and other garments",
      tech:"React.js, TailwinCSS"
    },
    {
      img: first,
      title:"Vulcanzy 2024",
      details:"Coordinated Vulcanzy 2024, the annual cultural fest at NIT Andhra Pradesh , working closely with a team of four members to develop and launch the event’s website.",
      tech:"React.js, TailwinCSS"

      },
    {
      img: first,
      title:"Laundry Management Web App",
      details:"Developed a web application to manage laundry services, including order tracking, customer management.",
      tech:"React.js ,TailwinCSS ,Express.js ,MongoDB, JWT for authorization"
      },
    {
      img: first,
      title:"Go Authentication and Authorization Server",
      details:"Developed a robust authentication and authorization server using Go, providing secure access control for various applications",
      tech:"Go (Golang), JWT ,Bcrypt, PostgreSQL, RESTFUL API"
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
      <div className="grid md:grid-cols-2 gap-9 justify-items-center  w-full ">
        {data.map((item, index: any) => (
          <div key={index}>
            <Card {...item}/>
          </div>
        ))}
      </div>
    </div>
  );
}
