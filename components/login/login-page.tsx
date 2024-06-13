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
        <div className="flex h-screen bg-white justify-between items-center overflow-hidden">
            <div className="w-1/2">
                <Image src={LoginImage} width={undefined} height={undefined} alt="Login"
                       className="h-full "/>
            </div>
            <div className="w-1/2 h-h-70 flex flex-col justify-evenly items-center">
                <Image src={Logo} width={200} alt="Logo"/>
                <h1 className="text-3xl font-[800]">Welcome back!</h1>
                <p className="text-gray-500 text-login">Login to your portfodia account</p>
                <form className="w-full max-w-sm">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" placeholder="Email"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                            <Link href="/forgetPassword" className="text-primary float-right text-sm">Forgot Password?</Link>
                        </label>
                        <input type={showPassword ? "text" : "password"} id="password" placeholder="******************"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
                        <div className="absolute inset-y-0 right-0 pr-3 pt-4 flex items-center">
                            <button onClick={togglePasswordVisibility}>
                                {showPassword ? <FaRegEyeSlash/> :
                                    <FaRegEye/>}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <Link className='bg-primary hover:opacity-55 rounded text-login text-white font-bold py-1 px-2 text-center w-full focus:outline-none focus:shadow-outline' href="/loggedInPage">Sign In</Link>
                    </div>
                </form>
                <p className="text-sm">
                    New to Portfodia? 
                    <Link href="/signup" className="text-primary ">Create an account</Link>

                </p>
                <p className="flex items-center text-sm justify-between">
                    {/* <hr className="flex-grow h-0.5 bg-gray-500 mx-2"/> */}
                    <span>or</span>
                    {/* <hr className="flex-grow h-0.5 bg-gray-500 mx-2"/> */}
                </p>

                <button
                    className="bg-transparent flex justify-evenly items-center w-fit gap-1 hover:bg-gray-100 text-graybtn border-2 border-graybtn text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    <Image src={Google} width={20} height={20} alt="Google"/>
                    Sign In with Google
                </button>
            </div>
        </div>
    );
}