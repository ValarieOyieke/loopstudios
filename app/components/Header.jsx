'use client'

import { useRef } from "react"
import Link from "next/link";
import { FaBars, FaTimes} from 'react-icons/fa';


const Header = () => {

    const navRef = useRef()

    const showNavbar = () =>{
        navRef.current.classList.toggle('responsive_nav')
    }
    
    return (  
        <header className="header">
             <div className="header-nav">
               <img src="/images/logo.svg" className="nav-logo logo" />
                <nav ref={navRef} className="nav"> 
                    <Link className="nav-item" href="#">About</Link>
                    <Link className="nav-item" href="#">Careers</Link>
                    <Link className="nav-item" href="#">Events</Link>
                    <Link className="nav-item" href="#">Products</Link>
                    <Link className="nav-item" href="#">Support</Link>
                    
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                       <FaTimes />
                    </button>
                </nav>
             <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
            </div>

          <div className="header-text">Immersive experiences that deliver</div>
        </header>
    );
}
 
export default Header;