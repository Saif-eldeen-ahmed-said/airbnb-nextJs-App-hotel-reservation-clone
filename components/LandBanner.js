import banner from '../public/thebanner.png'
import Image from 'next/legacy/image'

function LandBanner() {
  return (
    <div className='relative w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[450px] xl:h-[500px] '>
        <Image
        src={banner}
        layout="fill"
        priority
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-2xl font-semibold py-2'>your journey starts here</p>
            <button className='bg-white px-8 py-2 rounded-full text-blue-500 hover:shadow-xl active:scale-90
            transition duration-250
            '>start now</button>
        </div>
    </div>
  )
}

export default LandBanner