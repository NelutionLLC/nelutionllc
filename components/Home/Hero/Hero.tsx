const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
      <div className='absolute top-0 left-0 w-full h-full bg-green-800 opacity-70'>
        <video 
            src="/images/BackgroundVideo.mp4"
            autoPlay
            muted
            loop
            preload='metadata'
            className='w-full h-full object-cover'
        />

        <div className="absolute z-[100] w-full h-full top-[57%] left-[49%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex items-center justify-center flex-col w-full h-full">
            <div>
              <h1 className="text-[-25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase">Nelution</h1>
              <p className="md:text-base text-center text-white text-lg font-normal [word-spacing:5px]">Your business, online in minutes — no code required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
