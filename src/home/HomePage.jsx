/* eslint-disable no-unused-vars */
import { useState } from "react"
import Homes from "../component/homes/Homes"
import Upcomming from "../component/upcoming/Upcomming"
import { latest , recommended , upcome }  from "../dummyData"
import Trending from "../component/trending/Trending"

 const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [ items , setItems] = useState(upcome)
  const [ item, setItem ] = useState(latest)
  const [ rec , setRec] = useState(recommended)
  return (
    <div>
        <Homes />
        <Upcomming items={items} title='Upcoming Movies' />
       <Upcomming items={item} title='Latest Movies' />
         <Trending />
        <Upcomming items={rec} title="Recommended Movie"/>
    </div>
  )

}

export default HomePage