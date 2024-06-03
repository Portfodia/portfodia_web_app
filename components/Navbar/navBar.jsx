import { FiSearch } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import Link from 'next/link';
const Navbar = () => {

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
            <div className="flex items-center justify-between lg:px-20 px-3 py-3">
            <IoMenuOutline
                className="visible lg:invisible cursor-pointer lg:absolute  text-[27px] text-deepPurple"
                onClick={toggleMenu}
            />
                <ul className="lg:flex items-center gap-6 hidden">
                    <li className="flex items-center gap-1">
                        <a href="#" className="text-[1.2rem] font-semibold">Portfolio</a>
                        <FaCaretDown onClick={togglePortfolio} className="cursor-pointer" />
                    </li>
                    <li><a href="#" className="text-[1.2rem] font-semibold">About</a></li>
                    <li><a href="#" className="text-[1.2rem] font-semibold">Career</a></li>
                    <li><a href="#" className="text-[1.2rem] font-semibold">Go Pro</a></li>
                </ul>

                {/* toggle-portfolio */}
                {portfolioVisible && (
                    <div className="bg-white rounded-lg p-6 absolute top-24">
                        <ul className="flex flex-col gap-4">
                            <li><a href="#">Build Portfolio</a></li>
                            <li><a href="#">Find Portfolio</a></li>
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
                    <Link href="/login" className=" lg:text-[1.2rem] text-sm font-semibold">Login</Link>
                    <Link href="/signup" className="text-white bg-black lg:rounded-md rounded-sm lg:px-5 lg:py-2 px-3 py-1 text-[0.7rem] lg:text-[1rem]">Sign Up</Link>
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
                    <div className="flex flex-col gap-2">
                        <Link href="/login" className="bg-middlePurple text-white py-3 rounded-md font-semibold">Log In</Link>
                        <Link href="/signup" className="mobile-signup border-black rounded-md py-4 font-semibold">Sign Up</Link>
                    </div>
                     
                        
                  
                </div>
            )}
        </nav>
     );
}
 
export default Navbar;