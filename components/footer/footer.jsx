import { CgFacebook } from "react-icons/cg";
import { GrTwitter } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
const Footer = () => {
    return ( 
        <div className=" bg-[#F5F5F5]">
            <div className="flex md:items-center md:flex-row flex-col md:justify-between md:gap-0 gap-5 md:px-20   pt-20 pb-6">
                <div>
                    <img src="images/portfodia.png" className="w-32  px-4 md:px-0" alt="" />
                </div>
                    <ul className="flex md:items-center px-6 md:px-0  md:flex-row flex-col md:gap-6 gap-2">
                        <li><a href="#" className="md:text-[1rem] text-[0.9rem] md:font-medium">Build Portfolio</a></li>
                        <li><a href="#" className="md:text-[1rem] text-[0.9rem] md:font-medium">Find Portfolio</a></li>
                        <li><a href="#" className="md:text-[1rem] text-[0.9rem] md:font-medium">About</a></li>
                        <li><a href="#" className="md:text-[1rem] text-[0.9rem] md:font-medium">Blogs</a></li>
                        <li><a href="#" className="md:text-[1rem] text-[0.9rem] md:font-medium">Careers</a></li>
                        <li><a href="#" className="md:text-[1rem] text-[0.9rem] md:font-medium">Go Pro</a></li>
                    </ul>
                <div className="md:flex items-center px-6 md:px-0 gap-4 hidden">
                <CgFacebook />
                <GrTwitter />
                <IoLogoInstagram />
                <FaYoutube />
                <FaPinterest />
                </div>

                <form className="flex md:hidden mx-6 items-center gap-2 bg-white px-3 py-2 rounded-md shadow-lg">
                    <CgMail className="text-[2rem]"/>
                    <input type="text" className="md:placeholder:text-[1rem] placeholder:text-[0.75rem] w-40" placeholder="Input your email address"/>
                    <button className="bg-lightGreen py-1 md:px-4 px-3 text-white rounded-md md:text-[1rem] text-sm">Subscribe</button>
                </form>
            </div>

            <div className="md:px-20 px-6 md:py-6 md:pb-10 pb-16 md:flex-row flex-col flex md:items-center md:justify-between gap-5">
                <form className="md:flex items-center gap-2 hidden bg-white px-4 py-2 rounded-md shadow-lg md:order-3 order-1">
                    <CgMail className="text-[2rem]" />
                    <input type="text" className="placeholder:text-[1rem] outline-none" placeholder="Input your email address"/>
                    <button className="bg-lightGreen py-1 px-4 text-white rounded-md">Subscribe</button>
                </form>

                <div className="flex items-center gap-4 md:hidden order-2">
                <CgFacebook />
                <GrTwitter />
                <IoLogoInstagram />
                <FaYoutube />
                <FaPinterest />
                </div>

                <ul className="flex md:flex-row flex-col md:items-center gap-2 md:gap-4 md:order-1 order3">
                    <li className="md:text-[1rem] text-[0.92rem]">@2024 Portfodia</li>
                    <li className="md:text-[1rem] text-[0.92rem]">Terms</li>
                    <li className="md:text-[1rem] text-[0.92rem]">Privacy</li>
                    <li className="md:text-[1rem] text-[0.92rem]">Cookies</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;