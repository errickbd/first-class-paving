import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import Logo from '../FCPLogo.jpg';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false); // State for dropdown menu

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/home" className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={Logo} className='logo' alt='First Class Paving Logo'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item dropdown'
                            // onClick={toggleDropdown}
                            onMouseLeave={toggleDropdown}
                        >
                            <Link to='/services' className='nav-links dropdown-toggle' onClick={closeMobileMenu}>
                                SERVICES
                            </Link>
                            {dropdown && (
                                <div className='dropdown-menu'>
                                    <Link to='/asphalt_paving' className='dropdown-link dropdown-item' onClick={closeMobileMenu}>Asphalt Paving</Link>
                                    <Link to='/concrete' className='dropdown-link dropdown-item' onClick={closeMobileMenu}>Concrete</Link>
                                    <Link to='/sealcoat' className='dropdown-link dropdown-item' onClick={closeMobileMenu}>Sealcoat</Link>
                                </div>
                            )}
                        </li>
                        <li className='nav-item'>
                            <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                                GALLERY
                            </Link>
                        </li>
                        <li className='nav-item-contact-mobile'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/quote' className='nav-links-mobile get-quote-btn' onClick={closeMobileMenu}>
                                GET A QUOTE
                            </Link>
                        </li>
                    </ul>
                    <ol className='contact-ol' style={{color: 'rgb(65, 65, 65)'}}>
                    <li className='nav-item-contact'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    </ol>
                    {button && <Button buttonstyle='btn--outline' className='get-quote-btn'>GET A QUOTE</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
