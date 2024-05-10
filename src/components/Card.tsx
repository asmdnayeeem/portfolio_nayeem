import first from "../images/Screenshot 2023-09-02 153332.png?url"

export default function Card() {
  return (
    <>
    <div className='group relative flex  md:flex-row flex-col  gap-5 justify-around items-center rounded-lg md:h-[18rem]'>
        <img src={first} alt="" className='w-full sm:min-w-[495px] max-w-[40rem] content-center  rounded-lg hover:shadow-xl hover:shadow-[#66958A] duration-500'/>
    {/* <div className='w-full h-full absolute bg-[#490242]/10 flex justify-center items-center rounded-lg backdrop-blur-2xl opacity-0 duration-500 group-hover:opacity-100'>
        <button className='bg-[#490242]  text-white font-mono p-2 pr-4 pl-4 rounded-full'>visit</button>
    </div> */}
    <div className="flex h-[80%] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam temporibus pariatur, voluptates aut eligendi commodi. Perspiciatis iure provident nulla distinctio tempora saepe at aspernatur officia et quaerat. Quis omnis labore dicta.</div>
    </div>
    </>
  )
}
