import { useState } from "react"
import { homeData } from "../../dummyData"
import Home from "./Home"
import "./Homes.scss"

const Homes = () => {
    const [items ] = useState(homeData)

    return (
        <>
           <section className="home">
             <Home items={items} />
           </section>
           </>
    )
}

export default Homes