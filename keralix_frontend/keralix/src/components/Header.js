import React, { useState } from 'react';
import '../styles/Header.css';
import KeralixLogo from '../assets/images/KeralixLogo.svg';
import Marquee from 'react-fast-marquee';
import { AiOutlineSearch } from 'react-icons/ai';

import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { CiUser, CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom'

export default function Header() {

    const HomePath = "/"
    const AboutPath = "/about"
    const ProductsPath = "/products"
    const ContactPath = "/contact"

    const UserLogInPath = "/login"
    const AddToCartPath = "/cart"



    const [active, setActive] = useState(false)

    const [opened, { toggle }] = useDisclosure();

    const handleLinkClick = () => {
        setActive(false)
        toggle()
    }


    return (
        <>
            {/* Announcement Section */}
            <div className="container-fluid announcement-bar">
                <Marquee speed={60} gradient={true} pauseOnHover={true}>
                    <div className="announcement-txt txt-1">
                        <span><Link to={'/'}>
                            Clearance Sale Event: Up to 50% Off Select Items!
                        </Link></span>
                    </div>
                    <div className="announcement-txt txt-2">
                        <span><Link to={'/'}>
                            Best special offers every week 40% Off! Free delivery time
                        </Link></span>
                    </div>
                    <div className="announcement-txt txt-3">
                        <span><Link to={'/'}>
                            Free Shipping on Orders over $140
                        </Link></span>
                    </div>
                    <div className="announcement-txt txt-3">
                        <span><Link to={'/'}>
                            Brand New Items
                        </Link></span>
                    </div>
                    <div className="announcement-txt txt-3">
                        <span><Link to={'/'}>
                            Coming Soon...!!!
                        </Link></span>
                    </div>
                </Marquee>
            </div>


            <header>

                <nav className='col-md-12'>
                    {/* Logo */}
                    <div className="col-md-1 logo">
                        <img src={KeralixLogo} alt="Keralix Logo" />
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className='col-md-4'>
                        <ul className={`nav-links ${active ? 'active' : ''}`}>
                            <li><Link to={HomePath} onClick={handleLinkClick} >Home</Link></li>
                            <li><Link to={ProductsPath} onClick={handleLinkClick} >Products</Link></li>
                            <li><Link to={AboutPath} onClick={handleLinkClick} >About</Link></li>
                            <li><Link to={ContactPath} onClick={handleLinkClick} >Contact</Link></li>
                        </ul>
                    </div>


                    {/* Account and Cart Icons */}
                    <div className='col-md-4 d-flex nav-trailer'>
                        {/* Search Bar */}
                        <div className="search-bar">
                            <input type="text" placeholder="Search" />
                            <AiOutlineSearch size={30} onClick={'#'} />
                        </div>
                        <Link to={UserLogInPath} className="account-icon">
                            <CiUser size={30} />
                        </Link>
                        <Link to={AddToCartPath} className="cart-icon">
                            <CiShoppingCart size={30} />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className='burger'>
                        <i onClick={() => setActive(!active)}>
                            <Burger
                                size="sm"
                                opened={opened}
                                onClick={toggle}
                                aria-label="Toggle navigation"
                                className="container-fluid text-black"
                                color='black'
                            />
                        </i>
                    </div>

                </nav>

            </header>

        </>
    );
}
