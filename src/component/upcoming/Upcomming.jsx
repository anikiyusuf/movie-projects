/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Ucard from "./Ucard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const SampleNextArrow = (props) =>{
    // eslint-disable-next-line react/prop-types
    const { onClick}  = props
    return (
        <div className='control-btn' onClick={onClick}>
              <button className="next">
              <svg width="64px" height="64px" viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#346]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -6643.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <polygon id="arrow_right-[#346]" points="264 6488.26683 258.343 6483 256.929 6484.21678 260.172 6487.2264 244 6487.2264 244 6489.18481 260.172 6489.18481 256.929 6492.53046 258.343 6494"> </polygon> </g> </g> </g> </g></svg>
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
        <svg fill="#000000" width="64px" height="64px" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M34,256,210,80l21.21,21.2L91.4,241H478v30H91.4L231.25,410.84,210,432Z"></path></g></svg>
          </button>  
        </div> 
    )
}
const  Upcomming = ( { items , title}) =>  {
    const settings = {
        dots:false,
        infinity:true,
        speed:500,
        slidesTOShow:3,
        slideToScroll:1,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>,
        responsive:[
            {
                breakpoint:800,
                settings:{
                    slidesTOShow:2,
                    slideToScroll:1,
                },
            },
        ],
    
    }
  return (
    <>
        <section className="upcome">
           <div className="container">
            <div className="heading flexSB">
                <h1>{title}</h1>
                <Link to="/">View ALL</Link>
            </div>
            <div className="content">
                <Slider { ...settings} >
                    {items.map((item) => {
                        return (
                            <>
                                <Ucard  key={item.id} item={item} />
                            </>
                    )
                    })}
                </Slider>
             </div>
           </div> 
        </section>
    </>
  )
}


export default Upcomming
