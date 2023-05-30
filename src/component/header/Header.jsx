import { useState} from 'react'
import "./Header.scss"

export default function Header() {
  const [ Mobile , setMobile ] = useState(false)


  function openMenu(){
    setMobile(!Mobile)
  }


  function closeMenu(){
    setMobile(false)
  }
  return (
        <>
          <header>
             <div className='container  flexSB'>
             <nav className='flexSB'>
              <div className='logo'>
                <h2>Movie</h2>
              </div>
              <ul className='desktopList'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Series</a>
              </li>
              <li>
                <a href='/'>Movies</a>
              </li>
              <li>
                <a href='/'>Pages</a>
              </li>
              <li>
                <a href='/'>Pricing</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
              </ul>
              <div className="account flexSB">
              <svg width="24px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="bell"> <g> <path d="M18.9,11.2s0-8.7-6.9-8.7-6.9,8.7-6.9,8.7v3.9L2.5,17.5h19l-2.6-2.4Z" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path d="M14.5,20.5s-.5,1-2.5,1-2.5-1-2.5-1" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> </g> </g> </g> </g></svg>
              <svg width="24px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="user"> <g> <path d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <circle cx="12" cy="7" fill="none" r="4" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle> </g> </g> </g> </g></svg>
              <button>Subscribe Now</button>
              </div>


              {/* Mobile List */}
              <div className="mobileList">
                <div  className="openMenu" onClick={openMenu}>{Mobile ? (<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="white" fillRule="evenodd"/></svg>):(<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#fff" fillRule="evenodd" opacity=".201"/></svg>)}</div>
                <div className="closeMenu" onClick={closeMenu}>{Mobile?"":(
                  <div className="mobileItems">
                   <ul className='mobileItem'>
                    <li>
                     <a href='/'>Home</a>
                    </li>
                    <li>
                     <a href='/'>Series</a>
                    </li>
                    <li>
                     <a href='/'>Movies</a>
                    </li>
                    <li>
                     <a href='/'>Pages</a>
                     </li>
                     <li>
                      <a href='/'>Pricing</a>
                     </li>
                     <li>
                       <a href='/'>Contact</a>
                      </li>
                     </ul>
                     <div className="accountMobile flexSB">
                      <svg width="24px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="bell"> <g> <path d="M18.9,11.2s0-8.7-6.9-8.7-6.9,8.7-6.9,8.7v3.9L2.5,17.5h19l-2.6-2.4Z" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path d="M14.5,20.5s-.5,1-2.5,1-2.5-1-2.5-1" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> </g> </g> </g> </g></svg>
                      <svg width="24px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="user"> <g> <path d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <circle cx="12" cy="7" fill="none" r="4" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle> </g> </g> </g> </g></svg>
                      <button>Subscribe Now</button>
              </div>

                  </div>
                )}</div>
              </div>
             
              </nav>
             </div>
          </header>
        </>

    )
}
