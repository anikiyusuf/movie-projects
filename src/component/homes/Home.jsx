/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HomeCard from "./HomeCard"



const SampleNextArrow = (props) =>{
    // eslint-disable-next-line react/prop-types
    const { onClick}  = props
    return (
        <div className='control-btn' onClick={onClick}>
              <button className="next">
              <svg width="64px" height="64px" viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#346]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -6643.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <polygon id="arrow_right-[#346]" points="264 6488.26683 258.343 6483 256.929 6484.21678 260.172 6487.2264 244 6487.2264 244 6489.18481 260.172 6489.18481 256.929 6492.53046 258.343 6494"> </polygon> </g> </g> </g> </g></svg>
              </button> 
        </div>
    )
}

const SamplePrevArrow = (props) => {
    // eslint-disable-next-line react/prop-types
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
          <button className="prev">
        <svg fill="#000000" width="64px" height="64px" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M34,256,210,80l21.21,21.2L91.4,241H478v30H91.4L231.25,410.84,210,432Z"></path></g></svg>
          </button>  
        </div> 
    )
}
// eslint-disable-next-line react/prop-types
const Home = ({ items }) => {
    
    const settings = {
        dots:false,
        infinity:true,
        speed:500,
        slidesToShow : 1,
        slidesToScroll : 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/> 
    } 

    return (
        <>
            <div className="homeContainer">
            <Slider { ...settings}>
             {items.map(( item ) => {
                            return(
                                <>
                                     <HomeCard key={item.id} item={item} />    
                                </>
                            )
                          })}
                </Slider>
             </div>
        </>
    )
}


export default Home