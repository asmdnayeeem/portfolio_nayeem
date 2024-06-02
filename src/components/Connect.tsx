import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { Link} from "react-router-dom";
export default function Connect() {
    return (
    <div id="connect" className='bg-[#66958A] relative flex flex-col gap-6 justify-center items-center font-mono h-[15rem] w-[100%]'>
        <p className='text-xl sm:text-2xl text-[#F0F2F4] font-semibold'>
            Let's Connect
        </p>
        <div className='flex gap-5'>
        <a href="https://www.github.com/asmdnayeeem" target="_blank" rel="noopener noreferrer">
        <IoLogoGithub size={40} color='#F0F2F4' className="scale-75 sm:scale-100"/>
        </a>
        <a href="https://www.linkedin.com/in/mdnayeemas/" target="_blank" rel="noopener noreferrer">
        <IoLogoLinkedin size={40} color='#F0F2F4' className="scale-75 sm:scale-100"/>
        </a>
        {/* <a href="http://www.gmail.com/asmdnayeem245@gmail.com" target="_blank" rel="noopener noreferrer"> */}
        <a href="mailto:asmdnayeem245@gmail.com">
        <IoMail size={40} color='#F0F2F4' className="scale-75 sm:scale-100"/>
        </a>
        </div>
    </div>
  )
}
