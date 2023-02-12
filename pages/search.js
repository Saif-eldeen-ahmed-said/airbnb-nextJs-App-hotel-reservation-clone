import { useRouter } from "next/router"
import Header from "../components/Header"
import TheFooter from "../components/TheFooter"
import ResultCards from "../components/ResultCards"



function search({results}) {
    const router=useRouter()
    const {location,StartDate,EndtDate,guest}=router.query;

const therange =`${StartDate} - ${EndtDate}`

  return (
    <div>
        <Header placeHolder={`${location} | ${therange} | ${guest} guests`}
        
        />
        <main >
            <section className="py-5 px-6">
            <p className="text-sm">300+ places for {guest} guests  from  {therange}</p>
        <h1 className="text-3xl font-semibold pb-5">stays in {location}</h1>

        <div className="hidden md:inline-flex flex-nowrap space-x-4 pb-4">
            <p className="button">Cancellation flexibility</p> 
            <p className="button">Price</p> 
            <p className="button">Rooms & Beds</p> 
            <p className="button">Type of place</p> 
            <p className="button">more filters</p> 
        </div>
        <div className="space-y-2">  {
                    results.map(
                        ({img, location, description,price,star,title,total})=>(
                            <ResultCards
                            key={title}
                            img={img}
                            location={location}
                            description={description}
                            price={price}
                            star={star}
                            title={title}
                            total={total}
                            />
                        )
                    )
                }</div>
            </section>
        </main>
        <TheFooter />
    </div>
  )
}

export async function getServerSideProps() {
    const results =await fetch("https://www.jsonkeeper.com/b/5NPS").then((res)=>res.json()) 
    return{
        props:{
            results,
        }
    }
} 

export default search