import React from 'react';
import Image from "next/image";
import forgetpass from "../../public/images/forgetpass.png"
import Logo from "../../public/images/portfodia.png"
import Google from "../../public/images/google.png"
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

export const ForgetPage: React.FC = () => {

    const [showPassword, setShowPassword] = React.useState(false)

    const togglePasswordVisibility = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        
        <div className="flex h-screen bg-white justify-between items-center overflow-hidden font-satoshi ">
           <div className=' grid grid-cols-12'>
           <div className=" xl:col-span-5 md:col-span-4 md:block  xs:hidden ">
                <Image src={forgetpass} width={undefined} height={undefined} alt="Login"
                       className="h-full object-cover"/>
            </div>
            <div className="xl:col-span-7 md:col-span-8 xs:col-span-12 grid place-content-center text-center md:p-16  xs:p-10">
               <div className=' flex flex-col items-center 2xl:p-24 md:p-28 gap-4'>
                <div className=' w-[291px] h-[109px]'>
                   <Image src={Logo} alt="Logo" className='w-full'/>

                </div>
                <h1 className="2xl:text-[41.92px] xl:text-[36px] md:text-[30px] xs:text-[25px] font-[900]">Forgot Password?</h1>
                <p className=" opacity-70 font-[500] 2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  md:pb-10 xs:pb-12">Enter your email, we will send you a link to reset your password.</p>
                <form className="w-full ">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700  font-bold mb-2 text-start 2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  ">Email</label>
                        <input type="email" id="email" placeholder="Email/Username"
                               className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 2xl:h-[62.88px] md:h-[50px] 2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  "/>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <button
                            className="2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm   bg-primary hover:opacity-55 rounded text-login text-white font-bold py-1 px-2  w-full focus:outline-none focus:shadow-outline 2xl:h-[59.39px] md:h-[50px] xs:h-[40px] "
                            type="button">
                            Sign In
                        </button>
                    </div>
                </form>
                <p className="2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm  font-[500]">
                    <a href="#" className="text-primary">Back to Sign in</a>
                </p>
              
               </div>

              
            </div>
           </div>
        </div>
    );
}

