import React from 'react';
import Image from "next/image";
import Link from 'next/link';

// import forgetpass from "../../public/images/forgetpass.png"
import signup_image from "../../public/images/signup_image.png"
import Logo from "../../public/images/portfodia.png"
import Google from "../../public/images/google.png"
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

export const SignUpPage: React.FC = () => {

    const [showPassword, setShowPassword] = React.useState(false)

    const togglePasswordVisibility = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        
        <div className="flex  bg-white justify-between items-center overflow-hidden font-satoshi ">
           <div className=' grid grid-cols-12 w-full h-full'>
           <div className=" xl:col-span-5 md:col-span-4 md:block  xs:hidden ">
                <Image src={signup_image} width={undefined} height={undefined} alt="Login"
                       className="h-full object-cover"/>
            </div>
            <div className="xl:col-span-7 md:col-span-8 xs:col-span-12 grid place-content-center text-center   xs:p-10">
               <div className=' flex flex-col items-center   '>
                <div className='  xl:w-[291px] xl:h-[108px]'>
                   <Image src={Logo} alt="Logo" className='w-full'/>

                </div>
                <h1 className="2xl:text-[41.92px] xl:text-[36px] md:text-[30px] xs:text-[25px] font-[900]">Join Portfodia</h1>
                <p className=" opacity-70 font-[500] 2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  md:pb-10 xs:pb-12">Welcome to Portfodia, Sign Up for free!</p>
                <form className="w-full flex flex-col gap-5">
                    <div className="">
                        <label htmlFor="email" className="block text-gray-700  mb-2 text-start 2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  ">Email</label>
                        <input type="email" id="email" placeholder="Email/Username"
                               className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 2xl:h-[62.88px] md:h-[50px] 2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  "/>
                    </div>
                    <div className="">
                        <label htmlFor="email" className="block text-gray-700   mb-2 text-start 2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  ">Phone Number</label>
                        <input type="email" id="email"
                               className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 2xl:h-[62.88px] md:h-[50px] 2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  "/>
                    </div>
                    <div className=" relative">
                        <label htmlFor="passord" className="block text-gray-700  mb-2 text-start 2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  ">Password</label>
                       
                                <input type={showPassword ? "text" : "password"} id="password" 
                               className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 2xl:h-[62.88px] md:h-[50px] 2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  "/>
                               <div className="absolute inset-y-0 right-0 pr-3 pt-4 flex items-center">
                            <button onClick={togglePasswordVisibility}>
                                {showPassword ? <FaRegEyeSlash/> :
                                    <FaRegEye/>}
                            </button>
                        </div>
                    </div>
                    <div className=" relative">
                        <label htmlFor="confirmPassord" className="block text-gray-700  mb-2 text-start 2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  ">Confirm Password</label>
                        
                        <input type={showPassword ? "text" : "password"} id="password" 
                        className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 2xl:h-[62.88px] md:h-[50px] 2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  "/>
                        <div className="absolute inset-y-0 right-0 pr-3 pt-4 flex items-center">
                            <button onClick={togglePasswordVisibility}>
                                {showPassword ? <FaRegEyeSlash/> :
                                    <FaRegEye/>}
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <button
                            className="2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm   bg-primary hover:opacity-55 rounded text-login text-white font-bold py-1 px-2  w-full focus:outline-none focus:shadow-outline 2xl:h-[59.39px] md:h-[50px] xs:h-[40px] "
                            type="button">
                            Sign In
                        </button>
                    </div>
                </form>
               <div className='flex flex-col gap-3 pt-5 w-full'>
               <p className="2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  font-[500]">
                Have an account already? 
                <Link href="/login" className="text-primary ">Sign in</Link>

                   
                </p>
                <small>Or Sign in with</small>
                <button
                    className="2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm   hover:opacity-55 rounded text-login border border-[#24242471] py-1 px-2  w-full focus:outline-none focus:shadow-outline 2xl:h-[59.39px] md:h-[50px] xs:h-[40px]  flex items-center justify-center gap-4"
                    type="button">
                    <Image src={Google} width={20} height={20} alt="Google"/>
                    Sign Up with Google
                </button>
               </div>
               </div>

              
            </div>
           </div>
        </div>
    );
}

