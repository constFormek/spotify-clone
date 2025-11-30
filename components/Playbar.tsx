
const Playbar = () => {
  return (
    <div className='fixed bottom-2 left-0 bg-[#333842] rounded-lg flex flex-col gap-2 w-[calc(100%-16px)] mx-2 p-2 pb-px '>
        <div className="flex justify-between items-center">
          <div className="flex gap-2.5 items-center max-w-[55%] ">
            <div className="min-w-[43px] shrink-0 aspect-square bg-black rounded-sm text-center"></div>

            <div className="flex flex-col max-w-full">
                <p className="text-[14.5px] w-full font-medium min-w-0  shrink whitespace-nowrap overflow-hidden text-transparent bg-clip-text bg-linear-to-r from-white from-85%  to-[#333842]">Get Lucky (feat. Pharrell Williams and Nile Rodgers)</p>

                <p className="text-[13px] font-normal text-white/60">Sobel, Magiera</p>
            </div>
          </div>

          <div className="">actions</div>
        </div>

        <div className="relative">
          <div className="min-h-[0.135rem] w-1/2 absolute  bg-white rounded-full"></div>
          <div className="min-h-[0.135rem]   bg-white/30 rounded-full"></div>
        </div>
    </div>
  )
}

export default Playbar