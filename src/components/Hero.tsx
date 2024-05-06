import Typewriter from "typewriter-effect";
// export default function Hero() {
//   return (
//     <>
//       <div className=" flex justify-around items-center top-0 h-[100vh] w-full bg-gradient-to-tr from-[#1c0232] via-[#1c0232] to-[#490242] ">
//         <div className="bg-black/10 bg-fixed blur absolute backdrop-blur-3xl h-[100vh]  top-0 w-full -z-10"></div>
//         {/* <div className='h-[20rem] w-[20rem] absolute bg-[#490242] animate-poschange  rounded-full -z-10'></div> */}
//         <div className="flex flex-col h-full justify-center items-start p-2 w-[30rem] gap-4">
//           <h1 className="text-white font-extrabold font-mono text-5xl">
//             {/* <Typewriter
//             options={{
//               strings: ["Hello:)", "welcome"],
//               autoStart: true,
//               loop: true,
//             }}
//           /> */}
//           Hello :)
//           </h1>
//           <div className="text-5xl font-extrabold text-white font-mono">
//             I'm Nayeem
//           </div>
//           <div className="text-left text-xl text-white font-mono">
//             I am a hobbyist coder based in India. I seek to expand my expertise
//             in various domains of tech and product innovation.
//           </div>
//         </div>
//         <div>
//           <div  className="w-[ h-[100vh] bg-black">

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
export default function Hero() {
  return (
    <div className=" flex justify-center items-center relative top-0 h-[90vh] w-full bg-[#F0F2F4] overflow-clip">
      {/* <div className='h-[200vh] bg-[#66958A] w-[12rem] absolute  right-0 rotate-[30deg] scale-[1.2] -translate-x-[14rem]'>
      </div> */}
      <div className="text-[#66958A] flex flex-col h-full justify-center items-start p-2 w-[30rem] gap-4">
        <h1 className=" font-extrabold font-mono text-5xl">
          {/* <Typewriter
             options={{
               strings: ["Hello:)", "welcome"],
               autoStart: true,
               loop: true,
             }}
           /> */}
          Hello :)
        </h1>
        <div className="text-5xl font-extrabold font-mono">I'm Nayeem</div>
        <div className="text-left text-black text-xl font-mono">
        "Enthusiastic coder eager to expand expertise in diverse areas of tech and product innovation."
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
