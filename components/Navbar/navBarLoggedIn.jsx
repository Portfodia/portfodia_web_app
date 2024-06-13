import { FiSearch } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import Link from 'next/link';

const NavBarLoggedIn = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const [portfolioVisible, setPortfolioVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const togglePortfolio = () => {
        setPortfolioVisible(!portfolioVisible)
    }; 

    return ( 
        <nav className="sticky top-0 bg-white">
        <div className="flex items-center justify-between lg:px-20 md:px-10 px-3 py-3">
        <IoMenuOutline
            className="visible md:invisible cursor-pointer md:absolute  text-[27px] text-deepPurple"
            onClick={toggleMenu}
        />
            <ul className="md:flex items-center gap-6 hidden">
                <li className="flex items-center gap-1">
                    <a href="#" className="lg:text-[1.2rem] md:text-[0.9rem] font-semibold">Portfolio</a>
                    <FaCaretDown onClick={togglePortfolio} className="cursor-pointer" />
                </li>
                <li><a href="#" className="lg:text-[1.2rem] md:text-[0.9rem] font-semibold">About</a></li>
                 <li><a href="#" className="lg:text-[1.2rem] md:text-[0.9rem] font-semibold">Career</a></li>
                 <li><a href="#" className="lg:text-[1.2rem] md:text-[0.9rem] font-semibold">Go Pro</a></li>
            </ul>

            {/* toggle-portfolio */}
            {portfolioVisible && (
                <div className="bg-white rounded-lg lg:p-6 md:p-3 absolute p-2 top-24">
                    <ul className="flex flex-col lg:gap-4 md:gap-1">
                        <li><a href="#" className="md:text-[0.8rem] lg:text-[1rem] text-sm">Build Portfolio</a></li>
                        <li><a href="#" className="md:text-[0.8rem] lg:text-[1rem] text-sm">Find Portfolio</a></li>
                    </ul>
                </div>
            )}


            {/* logo */}
            <div>
                <img src="images/portfodia 1.png" alt="" className="lg:w-[8rem] w-[6rem]" />
            </div>

            {/* search */}
            <div className="py-3 px-6 w-80 bg-lightGray rounded-full lg:flex items-center gap-1 hidden">
                <FiSearch className="text-deepGray" />
                <input className="bg-transparent text-deepGray outline-none placeholder:text-deepGray"  type="text" placeholder="Search"/>
            </div>

            {/* login */}
            <div className="flex items-center lg:gap-4 gap-2">
                <img src="images/Ellipse 1.png" className="w-8" alt="" />
                <p className="text-black md:text-[1rem] text-sm font-semibold">My Account</p>
            </div>
        </div>

        {/* mobile navbar */}
        {menuVisible && (
            <div className="flex flex-col gap-10 lg:flex-row absolute top-0 w-[100%] right-0 py-8 px-6 lg:px-0  shadow-lg z-20 bg-white">
                <div className="flex justify-between">
                    <ul className="flex flex-col gap-8 pt-10">
                        <li><a href="#" className="font-semibold">Build Portfolio</a></li>
                        <li><a href="#" className="font-semibold">Find Portfolio</a></li>
                        <li><a href="#" className="font-semibold">About </a></li>
                        <li><a href="#" className="font-semibold">Career</a></li>
                        <li><a href="#" className="font-semibold">Blog</a></li>
                        <li><a href="#" className="font-semibold">Go Pro</a></li>
                    </ul>
                  
                     <FaTimes  
                        onClick={toggleMenu}
                        className="lg:invisible visible cursor-pointer text-[32px] text-white bg-black p-2 rounded-full"
                    />
                </div>
                 
                   
              
            </div>
        )}
    </nav>
     );
}
 
export default NavBarLoggedIn;