import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
export default function Connect() {
    return (
    <div className='bg-[#66958A] relative flex flex-col gap-6 justify-center items-center font-mono h-[15rem] w-[100%]'>
        <p className='text-2xl text-[#F0F2F4] font-semibold'>
            Let's Connect
        </p>
        <div className='flex gap-5'>
        <IoLogoLinkedin size={40} color='#F0F2F4'/>
        <IoLogoGithub size={40} color='#F0F2F4'/>
        <IoMail size={40} color='#F0F2F4'/>
        </div>
    </div>
  )
}
