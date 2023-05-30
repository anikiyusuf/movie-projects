import { useState } from "react"
import { trending } from "../../dummyData"
import Home from "../homes/Home"
import "./Trending.scss"

const Trending = () => {
    // eslint-disable-next-line no-unused-vars
    const [ items , setItem ] = useState(trending)

    return(
        <>
            <section className='trending'>
                <Home items={items}/>
            </section>
        </>
    )
}

export default Trending 