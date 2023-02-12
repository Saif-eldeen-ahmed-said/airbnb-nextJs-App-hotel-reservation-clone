import Image from "next//legacy/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";


function ResultCards({img, location, description,price,star,title,total}) {


    const [like, setlike]= useState(false)

    const liked =()=>{
    !like ? setlike(true):setlike(false) ;
    }

  return (
    <div className="md:flex py-4 border-b cursor-pointer hover:opacity-80 hover:shadow-md hover:rounded-lg transition
    transform duration-200 ease-out
    ">
        <div className="flex justify-center pb-4">
        <div className="relative w-full h-60 md:w-72 md:h-52 flex-shrink-0 mx-2">
            <Image
            src={img}
            objectFit="cover"
            layout="fill"
            className="rounded-xl"
            />
        </div>
        </div>
        <div className="relative flex-grow px-4">
            <div className="flex justify-between items-start">
                <p className="text-4 text-gray-500">{location}</p>
                <div onClick={liked}>
                {like ?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fd5b61" className="h-7">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg>
:<HeartIcon className="h-7 cursor-pointer" />}
                </div>
                </div>
            <h3 className="font-semibold text-xl pb-3">{title}</h3>
            <p className="text-gray-600 pb-6">{description}</p>
            <div className="flex md:absolute md:bottom-0 w-full items-center pr-8">
                <p className="flex items-center flex-grow">
            <StarIcon className="w-6 text-red-500 mx-1" />
            {star}
            </p>
            <div>
                <h4 className="text-xl font-semibold lg:text-2xl">{price}</h4>
                <p className="text-gray-500 text-right">{total}</p>
                </div>
            </div>
            </div>
            </div>
  )
}

export default ResultCards