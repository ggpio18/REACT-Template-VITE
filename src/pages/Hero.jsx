import React from 'react'

export const Hero = () => {
  return (
    <div className='relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#071e18_35%,#208a65_67%,#35fb8e_85%)]'>
        <div className='lance absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 
        -translate-x-1/2 bg-[radial-gradient(closest-side,#000_85%,)] top-[450px] 
        border-[1px] border-[#8CD6DE]/30'/>

        <div className='container relative mx-auto px-4 pt-12 pb-24'>
            <div className='flex flex-col items-center justify-center text-center z-10'></div>
        </div>
    </div>
  );
};

