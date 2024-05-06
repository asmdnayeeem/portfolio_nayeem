export default function Navbar() {
  return (
    <div>
      <div className="sticky top-0 text-[#66958A] font-mono font-bold text-2xl text-start w-[100%] p-5 pl-10 bg-[#F0F2F4]">
        <div className="flex justify-between items-center">
          <h1>Nayeem.</h1>
          <div className=" right-0 flex flex-col gap-2">
            <div className="w-[1.8rem] h-[0.2rem] bg-[#66958A]  "></div>
            <div className="w-[2.1rem] h-[0.2rem] bg-[#66958A]  "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
