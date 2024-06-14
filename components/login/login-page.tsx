import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import LoginImage from "../../public/images/login_image.png"
import Logo from "../../public/images/portfodia.png"
import Google from "../../public/images/google.png"
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

export const LoginPage: React.FC = () => {

    const [showPassword, setShowPassword] = React.useState(false)

    const togglePasswordVisibility = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 h-screen bg-white ">
            <div className=" md:block sm:hidden xs:hidden">
                <Image src={LoginImage} width={undefined} height={undefined} alt="Login"
                       className="h-full "/>
            </div>
            <div className="md:p-20 sm:p-20 xs:p-10 bg-white">
                <div className=' flex  flex-col items-center lg:gap-[40px] md:gap-[20px] sm:gap-[20px] xs:gap-[20px]'>
                <div className='m-auto md:w-[232px]'>
                <Image src={Logo} width={200} alt="Logo"/>

                </div>
               <div className=' text-center flex flex-col lg:gap-[40px] md:gap-[20px]'>
               <h1 className="text-3xl font-[800]">Welcome back!</h1>
                <p className="text-gray-500 text-login">Login to your portfodia account</p>
               </div>
                <form className="w-full max-w-sm">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" placeholder="Email"
                               className=" appearance-none border border-[#DCDCDC] rounded w-full h-[55px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "/>
                    </div>
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                            <Link href="/forgetPassword" className="text-primary float-right text-sm">Forgot Password?</Link>
                        </label>
                        <input type={showPassword ? "text" : "password"} id="password" placeholder="******************"
                               className="appearance-none border-[#DCDCDC] border rounded w-full py-2 px-3 h-[55px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
                        <div className="absolute inset-y-0 right-0 pr-3 pt-4 flex items-center">
                            <button onClick={togglePasswordVisibility}>
                                {showPassword ? <FaRegEyeSlash/> :
                                    <FaRegEye/>}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between lg:pb-[40px] md:pb-[20px] sm:pb-[20px] xs:pb-[20px]">
                        <button
                            className="bg-primary hover:opacity-55 rounded text-login text-white font-bold py-1 px-2 h-[55px]  w-full focus:outline-none focus:shadow-outline"
                            type="button">
                            Sign In
                        </button>
                    </div>
                   <div className='flex flex-col lg:gap-[40px] md:gap-[20px] sm:gap-[20px] xs:gap-[20px] text-center'>
                    <p className="text-sm">
                        New to Portfodia? 
                        <Link href="/signup" className="text-primary ">Create an account</Link>

                        </p>
                        <div className="flex items-center text-sm justify-between w-2/4 overflow-hidden m-auto">
                            <hr className="flex-grow h-0.5 border border-[#DCDCDC]   mx-2"/>
                            <span>or</span>
                            <hr className="flex-grow h-0.5 border border-[#DCDCDC]   mx-2"/>
                        </div>

                        <button
                            className="bg-transparent flex justify-evenly items-center gap-1 w-full hover:bg-gray-100 text-graybtn  border border-[#DCDCDC] h-[55px] text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            <Image src={Google} width={20} height={20} alt="Google"/>
                            Sign In with Google
                        </button>
                   </div>
                </form>
               
                </div>
            </div>
        </div>
    );
}