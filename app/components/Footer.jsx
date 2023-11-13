import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter, FaPinterest, FaInstagram} from 'react-icons/fa6';

const Footer = () => {
    return ( 
        <footer className="footer">
                <div className="footer-items-list">
                    <img src="/images/logo.svg" className="logo" />
                    <ul className="footer-items">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <div className="footer-icons">
                        <FaFacebookSquare className="footer__social-image" alt="Facebook icon"/>
                        <FaXTwitter className="footer__social-image" alt="X Twitter icon"/>
                        <FaPinterest className="footer__social-image" alt="Pinterest icon"/>
                        <FaInstagram className="footer__social-image" alt="Instagram icon"/>
                    </div>
                    <p>&copy;2023 Loopstudios.All rights reserved</p>
                </div>
        </footer>
     );
}
 
export default Footer;