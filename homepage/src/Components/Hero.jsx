import React from 'react';
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-[#00df9a]  font-bold p-2">METAL METAL METAL</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Stuff stuff.</h1>
            <div className="flex justify-center items-center">
                <p className="md:text-5xl sm:text-4xl text-xl font-bold">Family peeps:</p>
                <Typed 
                className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                    strings={['Tim', 'Sarah', 'Zack']} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop
                />
            </div>
            <p className="md-text-2xl text-xl font-bold text-gray-500">Monitor your blah blah blah</p>
        </div>
    </div>
  )
}

export default Hero