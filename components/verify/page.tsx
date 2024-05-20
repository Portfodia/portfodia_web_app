import React from 'react';
import Image from "next/image";
import CodePin from "../codeinput/code-input"
// import Link from "next/link"
import verify from "../../public/images/verify.png"
import Logo from "../../public/images/portfodia.png"
import Google from "../../public/images/google.png"
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

export const VerifyPin: React.FC = () => {

    const [showPassword, setShowPassword] = React.useState(false)

    const togglePasswordVisibility = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        
        <div className=" h-screen bg-white justify-between items-center overflow-hidden font-satoshi ">
           <div className=' grid grid-cols-12 h-full'>
           <div className=" 2xl:col-span-4 xl:col-span-3  md:col-span-3 md:block  xs:hidden ">
                <Image src={verify} width={undefined} height={undefined} alt="Login"
                       className="h-full object-cover"/>
            </div>
            <div className=" 2xl:col-span-8 xl:col-span-9 md:col-span-8 xs:col-span-12">
               <div className=' flex justify-end 2xl:p-10 2xl:px-20 xl:p-8 xl:px-20 md:p-10 md:px-16 xs:p-4 xs:px-10'>
                    <div>
                        <p>Having troubles? <a href="#">Get Help</a> </p>
                    </div>
               </div>
               <form className=' flex flex-col gap-8 max-w-[773px] 2xl:p-24 xl:p-20 xl:py-10 xs:p-10'>
               <div className=' flex flex-col gap-6 md:pr-20 xs:pr-0'>
               <h1 className=' 2xl:text-[50px] xl:text-[36px] md:text-[30px] xs:text-[25px] font-black'>
                Welcome, Please verify your phone number
                </h1>
                <p className='2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm'>
                A four digit code has been sent to +234 *****728. Please  input it below for verification
                </p>
               </div>
                <div className=' max-w-[480.37px]'>
                 <div className=' flex justify-between'>
                    <p className='2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm'>CODE</p>
                    <p className='2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm'> <span  className=' font-bold border-b-2 pl-1 border-black'>Resend</span> in.50sec</p>
                 </div>
                 <div>
                    <CodePin/>
                 </div>

                </div>
                <button className='2xl:text-[23.29px] xl:text-[20px] md:text-sm xs:text-sm   bg-primary hover:opacity-55 rounded text-login text-white font-bold py-1 px-2  w-full focus:outline-none focus:shadow-outline 2xl:h-[59.39px] md:h-[50px] xs:h-[40px] '>
                    continue
                </button>
               </form>

              
            </div>
           </div>
        </div>
    );
}

