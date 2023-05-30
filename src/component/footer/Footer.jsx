/* eslint-disable react/no-unknown-property */
/* eslint-disable no-mixed-spaces-and-tabs */
import "./Footer.scss"

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className="box">
                        <ul className='flex'>
                            <li>Terms of Use</li>
                            <li>Privacy-Policy</li>
                            <li>Blog</li>
                            <li>FAQ</li>
                            <li>Watch List</li>
                        </ul>
                        <p>© 2022 STREAM IT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
                    </div>
                   
                    <div className='box '>
                        <h3>Stream It App</h3>
                        <div className="img flexSB">
                        <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
              <span>Google Play Store</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
