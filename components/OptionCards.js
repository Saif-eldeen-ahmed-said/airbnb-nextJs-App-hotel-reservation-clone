import Image from "next/legacy/image"

function OptionCards({img,title}) {
  return (
    <div className="text-center hover:scale-110 transform transition duration-300 ease-out py-5 px-2 cursor-pointer">
    <div className="relative w-80 h-80">
        <Image
        src={img}
        layout='fill'
        className="rounded-lg"
        alt="/"
        />
    </div>
    <h2 className="font-semibold text-xl my-2">{title}</h2>
    </div>
  )
}

export default OptionCards