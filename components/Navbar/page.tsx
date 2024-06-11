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
            <div className="flex items-center justify-between  md:px-[74px] md:py-[23px] xs:p-[17px]  ">
            <IoMenuOutline
                className="visible md:invisible cursor-pointer md:absolute  text-[27px] text-deepPurple"
                onClick={toggleMenu}
            />
                <ul className="md:flex items-center gap-6 hidden">
                    <li className="flex items-center gap-1">
                        <Link href="#" className="lg:text-[20px] md:text-[18px] font-semibold">Portfolio</Link>
                        <FaCaretDown onClick={togglePortfolio} className="cursor-pointer" />
                    </li>
                    <li><Link href="/about" className="lg:text-[20px] md:text-[18px] font-semibold">About</Link></li>
                    <li><Link href="/career" className="lg:text-[20px] md:text-[18px] font-semibold">Career</Link></li>
                    <li><Link href="#" className="lg:text-[20px] md:text-[18px] font-semibold">Go Pro</Link></li>
                </ul>

                {/* toggle-portfolio */}
                {portfolioVisible && (
                    <div className="bg-white rounded-lg p-6 absolute top-24">
                        <ul className="flex flex-col gap-4">
                            <li><Link href="#">Build Portfolio</Link></li>
                            <li><Link href="#">Find Portfolio</Link></li>
                        </ul>
                    </div>
                )}
    

                {/* logo */}
                <Link href='/'>
                    <div>
                        <img src="images/portfodia 1.png" alt="" className="lg:w-[8rem] md:w-[166px] w-[6rem]" />
                    </div>
                </Link>

                {/* search */}
                <div className="lg:py-3 lg:px-6 md:py-1 md:px-3 lg:w-80 md:w-100 h-[55px]  bg-lightGray rounded-full md:flex items-center gap-1 hidden">
                    <FiSearch className="text-deepGray" />
                    <input className="bg-transparent text-deepGray outline-none placeholder:text-deepGray"  type="text" placeholder="Search"/>
                </div>

                {/* login */}
                <div className="flex items-center md:gap-4 gap-2">
                    <Link href="/login" className=" lg:text-[20px] md:text-[18px] text-sm font-semibold">Login</Link>
                    <Link href="/signup" className="text-white bg-black md:rounded-md rounded-sm md:px-5 md:py-2 px-3 py-1 text-[0.7rem] md:text-[1rem]">Sign Up</Link>
                </div>
            </div>

            {/* mobile navbar */}
            {menuVisible && (
                <div className="flex flex-col gap-10 md:flex-row absolute top-0 w-[100%] right-0 py-8 px-6 md:px-0  shadow-lg z-20 bg-white">
                    <div className="flex justify-between">
                        <ul className="flex flex-col gap-8 pt-10">
                            <li><Link href="#" className="font-semibold">Build Portfolio</Link></li>
                            <li><Link href="#" className="font-semibold">Find Portfolio</Link></li>
                            <li><Link href="/about" className="font-semibold">About </Link></li>
                            <li><Link href="/career" className="font-semibold">Career</Link></li>
                            <li><Link href="#" className="font-semibold">Blog</Link></li>
                            <li><Link href="#" className="font-semibold">Go Pro</Link></li>
                        </ul>
                      
                         <FaTimes  
                            onClick={toggleMenu}
                            className="md:invisible visible cursor-pointer text-[32px] text-white bg-black p-2 rounded-full"
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