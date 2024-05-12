import first from "../images/Screenshot 2023-09-02 153332.png?url"

export default function Card() {
  return (
    <div className='group relative flex  md:flex-row flex-col  gap-5 justify-around items-center rounded-lg md:h-[18rem]'>
        <img src={first} alt="" className='w-full sm:min-w-[495px] max-w-[40rem] content-center  rounded-lg hover:shadow-xl hover:shadow-[#66958A] duration-500'/>
   
    <div className="flex h-[80%] text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam temporibus pariatur, voluptates aut eligendi commodi. Perspiciatis iure provident nulla distinctio tempora saepe at aspernatur officia et quaerat. Quis omnis labore dicta.</div>
    </div>
  
  )
}
