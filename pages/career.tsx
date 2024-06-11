import React from 'react';
import Image from 'next/image';
import CareerHero from './../public/images/car-hero.png'
import her1 from './../public/images/her1.png'
import her2 from './../public/images/her2.png'
import Navbar from '../components/Navbar/page' 
import Footer from "../components/footer/footer";



const Login: React.FC = () => {
    return (<>
        <Navbar/>
        <section>
            <div className='grid md:grid-cols-2 xs:grid-cols-1 place-items-center  lg:p-32 md:p-24 md:py-28 gap-10  xs:px-[38.496px] xs:py-28 '>
                <div className=' md:order-1 xs:order-2 flex flex-col justify-between gap-14'>
                    <div className='flex flex-col gap-10' >
                        <h1  className='lg:test-[55px] md:text-[50px]  md:font-[900] sm:text-[50px] sm:font-[900]  md:leading-[74.25px] sm:leading-[74.25px] xs:text-[26px] xs:font-[900] xs:leading-normal '>
                        Are you looking for a place where you can grow professionally?
                        </h1>
                        <p className=' lg:text-[26px] lg:font-[500] md:text-[20px] sm:text-[20px] md:font-[400]'>Join our team, and be part of the company that values innovation, teamwork, and creativity!</p>
                        
                    </div>
                    <div>
                    <button className=' lg:w-[226px] lg:h-[60px] md:w-[226px] md:h-[60px] sm:w-[226px] sm:h-[60px] xs:w-[226px] xs:h-[60px] bg-[#7439E7] text-white lg:text-[21px] font-bold rounded-xl'>
                    GET STARTED!
                    </button>
                    </div>
                </div>
                <div className=' md:order-2 xs:order-1'>

                     <div>
                        <Image
                            src={CareerHero}
                            height={1000}
                            width={1000}
                            alt='image'
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className='lg:p-20 md:p-16 sm:p-10  md:py-32 xs:py-[67.537px] xs:px-[38.496px]   sm:py-28 bg-[#ECE2FF]'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:p-14 gap-28'>
                <div className=' '>
                    <div className='lg:h-[782px] sm:h-[500px] md:h-[782px] xs:h-[249px] overflow-hidden'>
                    <Image
                            src={her1}
                            height={1000}
                            width={1000}
                            alt='image'
                            className='xs:w-full xs:h-full xs:object-cover'
                        />
                    </div>
                </div>
               <div className='flex flex-col  justify-between'>
               <div className=' flex flex-col gap-10'>
                    <h1 className='lg:test-[55px] md:text-[50px]  md:font-[900] sm:text-[50px] sm:font-[900]  leading-[74.25px] xs:text-[26px] xs:font-[900] xs:leading-normal '>
                    What you should know about us
                    </h1>
                    <p className=' lg:text-[26px] lg:font-[500] md:text-[20px] sm:text-[20px] md:font-[400]'>
                    As the digital world continues to evolve, individuals are constantly searching for ways to showcase their skills and accomplishments in a professional manner. In this fast-paced and competitive job market, having a strong and dynamic career portfolio can make all the difference. That's why we are proud to introduce our new digital product - a platform that will revolutionize the way people create and manage their career portfolios.

                    </p>
                </div>
                <div>
                    <button className='md:w-[352px] lg:w-[353px] md:py-[32px]  sm:w-[353px] sm:py-[32px] bg-[#1E0057] text-white  rounded-xl lg:text-[26.122px] md:text-[20px] font-[700] sm:text-[20px] mt-20 xs:w-[168.87px] xs:text-[15px] xs:py-[15.308px] xs:px-[12.438px] xs:rounded-md'>Get Started Now!</button>
                </div>
               </div>
            </div>
        </section>
        <section className='lg:p-20 md:p-16 sm:p-10  md:py-32 xs:py-[67.537px] xs:px-[38.496px]  sm:py-28'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-28'>
                    <div className="flex flex-col justify-between md:order-1  xs:order-2">
                        <div className='  flex flex-col gap-10'>
                            <h1 className='lg:test-[55px] md:text-[50px]  md:font-[900] sm:text-[50px] sm:font-[900]  leading-[74.25px] xs:text-[26px] xs:font-[900] xs:leading-normal '>We are a subsidiary of Utidia</h1>
                            <p className=' lg:text-[26px] lg:font-[500] md:text-[20px] sm:text-[20px] md:font-[400]'>
                            We’ve been established and setup by Utidia to solve the problem of recruitment, and talent acquisition by companies.
                            </p>
                            
                        </div>
                        <div>
                            <div>
                                <button className='md:w-[352px] lg:w-[353px] md:py-[32px] sm:w-[353px] sm:py-[32px] bg-[#1E0057] text-white  rounded-xl lg:text-[26.122px] md:text-[20px] font-[700]  sm:text-[20px] mt-20 xs:w-[168.87px] xs:text-[15px] xs:py-[15.308px] xs:px-[12.438px] xs:rounded-md'>Get Started Now!</button>
                            </div>
                        </div>
                    </div>
                    <div className=' md:order-2  xs:order-1'>
                        <div className='h-[473px] md:w-full bg-gray-500'>
                       
                        </div>
                    </div>
            </div>
        </section>
       
        <section className='lg:p-20 md:p-16 sm:p-10  md:py-32 xs:py-[67.537px] xs:px-[38.496px] sm:py-28 bg-[#7439E7] text-white'>
        <div className='grid md:grid-cols-2 xs:grid-cols-1 gap-28'>
           <div className="md:order-1 xs:order-2 flex flex-col justify-between">
           
                <div className='  flex flex-col gap-10'>
                    <h1 className='lg:test-[55px] md:text-[50px]  md:font-[900] sm:text-[50px] sm:font-[900]  leading-[74.25px] xs:text-[26px] xs:font-[900] xs:leading-normal '>Our Target Audience</h1>
                    <p className=' lg:text-[26px] lg:font-[500] md:text-[20px] sm:text-[20px] md:font-[400]'>
                    Our target audience are generally individuals who are interested in growing their career (either through finding a job, getting a contract or looking for matching portfolios to hire for jobs, projects or contracts). Generally it is for people who are seeking hiring opportunities as either employees, freelancers or contractors and those interested to hire these professionals.

                    </p>
                    
                </div>
               <div>
                <button className='md:w-[352px] lg:w-[353px] md:py-[32px] sm:w-[353px] sm:py-[32px] bg-[#FFF] text-black  rounded-xl  lg:text-[26.122px] md:text-[20px] font-[700]  sm:text-[20px] mt-20 xs:w-[168.87px] xs:text-[15px] xs:py-[15.308px] xs:px-[12.438px] xs:rounded-md' >
                        Find Portfolio
                 </button>
               </div>
           </div>
                <div className=' md:order-2 xs:order-1'>
                    <div>
                    <Image
                            src={her2 }
                            height={1000}
                            width={1000}
                            alt='image'
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className='lg:p-20 md:p-16 sm:p-10  md:py-32 xs:py-[67.537px] xs:px-[38.496px] sm:py-28 text-center flex flex-col gap-16 bg-[#fff]'>
            <div className='flex flex-col gap-10'>
                <h1 className=' lg:test-[55px] md:text-[50px] md:font-[900] sm:text-[50px] sm:font-[900] leading-[74.25px] md:w-3/4 md:px-3 lg:px-6 m-auto xs:text-[26px] xs:font-[900] xs:leading-normal '>get premium and Find Your Next Talent here on portfodia</h1>
                <p className=' lg:text-[26px] lg:font-[500] md:text-[20px] md:font-[400] md:w-3/4 m-auto'>
                    The world’s leading brands use Porfodia to Hire talents.
                    Browse through millions of portfolio to find the right one that fits your needs
                </p>
            </div>
            <div className='flex flex-col gap-10'>
                <div>
                <button className='lg:w-[390.999px] md:w-[352px] md:py-[32px] sm:w-[353px] sm:py-[32px] bg-[#010101] text-white  rounded-xl lg:text-[26.122px] md:text-[20px] font-[700]  sm:text-[20px] mt-20  xs:w-[168.87px] xs:text-[15px] xs:py-[15.308px] xs:px-[12.438px] xs:rounded-md' >Get Premium Plan!</button>

                </div>
                <p className=' lg:text-[26px] lg:font-[500] md:text-[20px] sm:text-[20px] md:font-[400]'>Have you built your portfolio? <span className='underline'>Build your portfolio</span></p>
            </div>
        </section>
        <Footer />

    </>);
};

export default Login;