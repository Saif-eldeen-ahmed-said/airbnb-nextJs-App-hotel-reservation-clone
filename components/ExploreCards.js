import Image from "next/legacy/image"

function ExploreCards({img , location , distance}) {
  return (
    <div  className="flex items-center  hover:bg-gray-200 mr-4  rounded-lg space-x-4 cursor-pointer my-4 hover:scale-105 transition duration-250">
        <div className="relative w-20 h-20 ease-out">
        <Image src={img}
        alt="/"
        layout="fill"  className="rounded-lg"
        />
        </div>
        <div >
            <h1 className="text-16 font-semibold py-1">{location}</h1>
            <p className="text-8 text-gray-500">{distance}</p>
        </div>
    </div>
  )
}

export default ExploreCards