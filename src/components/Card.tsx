import first from "../images/Screenshot 2023-09-02 153332.png?url"

export default function Card() {
  return (
    <>
    <div className='group relative  min-w-[16rem] w-[20rem] flex flex-col  justify-around items-center bg-white rounded-lg'>
        <img src={first} alt="" className='w-full content-center  rounded-lg hover:shadow-xl hover:shadow-[#66958A] duration-500'/>
    {/* <div className='w-full h-full absolute bg-[#490242]/10 flex justify-center items-center rounded-lg backdrop-blur-2xl opacity-0 duration-500 group-hover:opacity-100'>
        <button className='bg-[#490242]  text-white font-mono p-2 pr-4 pl-4 rounded-full'>visit</button>
    </div> */}
    </div>
    </>
  )
}
