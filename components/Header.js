import Image from 'next/image'
import bgimg from "../public/logo.png"
import {MagnifyingGlassIcon, UserCircleIcon, GlobeAltIcon,Bars3Icon, UsersIcon} from "@heroicons/react/24/solid"
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';



function Header({placeHolder}) {
  const router = useRouter()
  const [guest,setguest]=useState(1)
  const [Search, setSearch] = useState("")
  const[Startdate,setStartdate] =useState(new Date())
  const[Enddate,setEnddate] =useState(new Date())



const inputReset =()=>{
  setSearch("");
}

  const range={
    key:"selection",
    startDate:Startdate,
  endDate:Enddate,
  };


const rangeSelection = (ranges) => {
  setStartdate(ranges.selection.startDate);
  setEnddate(ranges.selection.endDate);
};

const searchResult =()=>{
  router.push({
    pathname:"/search"
,query:{
  location:Search,
  StartDate:Startdate.toDateString(),
  EndtDate:Enddate.toDateString(),
  guest,
}
  })
}


  return (
    <header className='sticky top-0 z-10 grid grid-cols-3 shadow-md p-4 md:px-2 bg-white'>
    <div className="relative flex items-center h-10 cursor-pointer my-auto"  onClick={()=>router.push("/")}>
        <Image src={bgimg} alt="/"
        width={150}
        priority
        />
      </div>

      <div className='flex items-center md:border-2 rounded-full shadow-md'>
        <input
        value={Search}
        onChange={(e)=>setSearch(e.target.value)}
        className='flex-grow pl-4 outline-none bg-transparent overflow-hidden' type="text"  placeholder={placeHolder||'find a place'} />
        <MagnifyingGlassIcon onClick={searchResult} className='hidden md:flex h-7 text-white bg-red-400 rounded-full p-1 cursor-pointer mx-2'/>
      </div>

      <div className='flex items-center justify-end text-gray-400 space-x-3'>
        <p className='hidden md:inline'>become a hoster</p>
        <GlobeAltIcon className='h-6 cursor-pointer'/>
        <div className='flex space-x-2 border-2 rounded-full p-2 cursor-pointer hover:shadow-md'>
          <UserCircleIcon className='h-7' />
          <Bars3Icon  className='h-7'/>
        </div>
      </div>
      {Search && (
        <div className='flex mx-auto col-span-3 pt-6 flex-col'>
          <DateRangePicker 
          ranges={[range]}
          minDate={new Date()}
          rangeColors={["#fd5b61"]}
          onChange={rangeSelection}
          />
          <div className='flex items-center border-b my-3'>
            <h1 className='text-2xl font-semibold flex-grow'>number of guests</h1>
            <UsersIcon className='h-6'/>
            <input type="number"
            min={1}
            max={15}
            value={guest}
            onChange={(e)=>  setguest(e.target.value)} 
            className='w-10 text-red-500 outline-none mx-1 text-xl'
            />
          </div>
          <div className='flex items-center'>
            <button className='flex-grow text-red-400' onClick={searchResult}>Search</button>
            <button  className='flex-grow' onClick={inputReset}>cancel</button>

          </div>
        </div>
      )}
    </header>
  )
}

export default Header