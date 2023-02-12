import Image from "next/legacy/image"

function LargeCard({img,title,buttonText,desc}) {
  return (
    <div className="relative py-20">
    <div className="relative h-96 cursor-pointer">
    <Image
    src={img}
    layout="fill"
    priority
    objectFit="cover"
    className="rounded-3xl"
    />
    </div>
    <div className="absolute top-36 left-12 ">
      <h1 className="w-60 text-4xl font-semibold">{title}</h1>
      <p className="py-3">{desc}</p>
      <button className="cursor-pointer bg-slate-800 text-white py-2 px-4 rounded-lg active:scale-90
            transition duration-250">{buttonText}</button>
    </div>
    </div>
  )
}

export default LargeCard