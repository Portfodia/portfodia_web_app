import Faq from "./faq/faq";
import { IoHeart } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
const Sections = () => {
    return ( 
        <div>

            {/* featured */}
            <div className="lg:px-20 px-6 py-20">
                <h1 className="font-semibold lg:text-2xl text-1xl py-3">Featured</h1>
                <div className="flex items-center justify-between"> 
                    <div className="lg:w-56 lg:h-60 h-48 w-40 bg-[url('/images/Rectangle-1347(1).png')] bg-cover bg-center rounded-b-3xl rounded-t-3xl">
                        {/* gradient-color */}
                        <div className="bg-gradient-to-b from-transparent lg:w-56 lg:h-60 h-48 w-40 to-black bg-blend-overlay bg-cover bg-center rounded-3xl">

                            {/* indidvidual cards */}
                            <div className="text-white px-5 pt-28 lg:pt-36 flex flex-col gap-1">
                                <h1 className="font-semibold  lg:text-sm text-[0.7rem]">Seyi Ajigbona</h1>
                                <p className="text-[0.5rem]">Product designer</p>
                                <div className="flex items-center gap-2">
                                    <p className="border rounded-3xl border-white lg:text-[0.5rem] text-[0.4rem] px-2 ">UX</p>
                                    <p className="border rounded-3xl border-white lg:text-[0.5rem] text-[0.4rem] px-2 ">Web</p>
                                    <p className="border rounded-3xl border-white lg:text-[0.5rem] text-[0.4rem] px-2">Graphics</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="flex items-center"><IoHeart className="text-[0.8rem]"/><span className="text-[0.6rem]">115</span></p>
                                    <p className="flex items-center"><IoEyeSharp className="text-[0.8rem]" /><span className="text-[0.6rem]">11.2k</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-56 lg:h-60 h-48 w-40 bg-[url('/images/Rectangle-1347(2).png')] bg-cover bg-center  rounded-b-3xl rounded-t-3xl">
                        {/* gradient color */}
                        <div className="bg-gradient-to-b from-transparent w-40 lg:w-56 lg:h-60 h-48 to-black bg-blend-overlay bg-cover bg-center rounded-3xl">

                            {/* individual cards */}
                            <div className="text-white px-5 lg:pt-36 pt-28 flex flex-col gap-1">
                                <h1 className="font-semibold lg:text-sm text-[0.7rem]">Felicia Badmus</h1>
                                <p className="text-[0.5rem]">Data Analyst</p>
                                <div className="flex items-center gap-2">
                                    <p className="border rounded-3xl border-white lg:text-[0.5rem] text-[0.4rem] px-2 ">Data</p>
                                    <p className="border rounded-3xl border-white lg:text-[0.5rem] text-[0.4rem] px-2 ">Analysis</p>
                                    <p className="border rounded-3xl border-white lg:text-[0.5rem] text-[0.4rem] px-2">Excel</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="flex items-center"><IoHeart className="text-[0.8rem]"/><span className="text-[0.6rem]">115</span></p>
                                    <p className="flex items-center"><IoEyeSharp className="text-[0.8rem]" /><span className="text-[0.6rem]">11.2k</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-56 h-60 bg-[url('/images/Rectangle-1347(3).png')] bg-cover bg-center  rounded-b-3xl rounded-t-3xl md:block hidden">
                        <div className="bg-gradient-to-b from-transparent w-56 h-60 to-black bg-blend-overlay bg-cover bg-center rounded-3xl">

                            {/* individual cards */}
                            <div className="text-white px-5 pt-36 flex flex-col gap-1">
                                <h1 className="font-semibold text-sm">Elizabeth Queen</h1>
                                <p className="text-[0.7rem]">Hr Specialist</p>
                                <div className="flex items-center gap-2">
                                    <p className="border rounded-3xl border-white text-[0.5rem] px-2 ">HR</p>
                                    <p className="border rounded-3xl border-white text-[0.5rem] px-2 ">CPU</p>
                                    <p className="border rounded-3xl border-white text-[0.5rem] px-2">Management</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="flex items-center"><IoHeart className="text-[0.8rem]"/><span className="text-[0.6rem]">115</span></p>
                                    <p className="flex items-center"><IoEyeSharp className="text-[0.8rem]" /><span className="text-[0.6rem]">11.2k</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-56 h-60 bg-[url('/images/Rectangle-1347(4).png')] bg-cover bg-center  rounded-b-3xl rounded-t-3xl md:block hidden">
                        <div className="bg-gradient-to-b from-transparent w-56 h-60 to-black bg-blend-overlay bg-cover bg-center rounded-3xl">

                            {/* individual cards */}
                            <div className="text-white px-5 pt-36 flex flex-col gap-1">
                                <h1 className="font-semibold text-sm">Mathew Johnson</h1>
                                <p className="text-[0.7rem]">Financial Advisor</p>
                                <div className="flex items-center gap-2">
                                    <p className="border rounded-3xl border-white text-[0.5rem] px-2 ">Finance</p>
                                    <p className="border rounded-3xl border-white text-[0.5rem] px-2 ">Money</p>

                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="flex items-center"><IoHeart className="text-[0.8rem]"/><span className="text-[0.6rem]">115</span></p>
                                    <p className="flex items-center"><IoEyeSharp className="text-[0.8rem]" /><span className="text-[0.6rem]">11.2k</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-56 h-60 bg-[url('/images/Rectangle-1347(5).png')] bg-cover bg-center  rounded-b-3xl rounded-t-3xl md:block hidden">
                        <div className="bg-gradient-to-b from-transparent w-56 h-60 to-black bg-blend-overlay bg-cover bg-center rounded-3xl">

                            {/* individual cards */}
                            <div className="text-white px-5 pt-36 flex flex-col gap-1">
                                <h1 className="font-semibold text-sm">Mary James</h1>
                                <p className="text-[0.7rem]">Full stack developer</p>
                                <div className="flex items-center gap-2">
                                    <p className="border rounded-3xl border-white text-[0.5rem] px-2 ">Web development</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="flex items-center"><IoHeart className="text-[0.8rem]"/><span className="text-[0.6rem]">115</span></p>
                                    <p className="flex items-center"><IoEyeSharp className="text-[0.8rem]" /><span className="text-[0.6rem]">11.2k</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

            {/* section-one */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-middleGray md:px-20 px-8 py-20 gap-16 md:gap-0">
                <div><img src="images/Rectangle 1467.png" className="md:w-[25rem]" alt="" /></div>
                <div className="flex flex-col gap-6 lg:w-[50%]">
                    <h1 className="md:text-5xl text-3xl  font-extrabold text-deepBlue md:w-[90%] md:leading-[3.5rem]">Build And Customize Your Portfodia in Minutes</h1>
                    <p className="text-deepBlue md:w-[80%] w-[95%] text-sm">You will be able to setup your portfodia portfolio in minutes with our simple and easy to understand interface</p>
                    <button className="text-white text-[0.9rem] md:text-[1rem] rounded-md py-2 px-4 bg-deepBlue md:w-[40%] w-[60%] font-semibold">Get Started Now!</button>
                </div>
            </div> 

            {/* section-two */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-green md:px-20 px-8 py-20 gap-16 md:gap-0">
                <div className="flex flex-col gap-6 lg:w-[50%]">
                    <h1 className="md:text-5xl text-2xl font-extrabold text-black md:leading-[3.5rem]">Bring All Your social media together on portfodia</h1>
                    <p className="text-black md:w-[60%] w-[85%] md:text-sm text-[0.9rem] leading-[1.3rem]">Bring all your social media accounts together and let recruiters easily find out more about you</p>
                    <button className="text-white text-[0.9rem] md:text-[1rem] rounded-md py-2 px-4 bg-black md:w-[40%] w-[60%] font-semibold mt-10">Get Started Now!</button>
                </div>
                <div><img src="images/Rectangle 1467 (1).png" className="md:w-[30rem]" alt="" /></div>
            </div> 

            {/* section-three */}
            <div className="flex flex-col md:flex-row items-center justify-between  md:px-20 px-8 py-20 gap-16 md:gap-0">
                <div><img src="images/Rectangle 1467 (2).png" className="md:w-[25rem]" alt="" /></div>
                <div className="flex flex-col gap-6 lg:w-[50%]">
                    <h1 className="md:text-5xl text-3xl  font-extrabold text-deepBlue md:w-[90%] md:leading-[3.5rem]">Add Collaborators on your projects for verification</h1>
                    <p className="text-deepBlue md:w-[80%] w-[95%] text-sm">Add collaborators on your projects for easy verification by recruiters who would like to work with you.</p>
                    <button className="text-white text-[0.9rem] md:text-[1rem] rounded-md py-2 px-4 bg-deepBlue md:w-[40%] w-[60%] font-semibold mt-10">Get Started Now!</button>
                </div>
            </div> 

            {/* section-four */}
            <div className="py-20 md:px-20 px-6 bg-lightOrange flex flex-col items-center gap-6">
                <h1 className="md:text-4xl text-2xl font-extrabold md:font-extrabold  text-center">Join Portfodia Today!</h1>
                <p className="md:w-[25%] text-[0.8rem] text-center font-light leading-5">Bring All your Resume into one Platform, Add Collaborators to projects.</p>
                <button className="text-white bg-black rounded-md py-2 px-6 mt-16 font-semibold ">Get Started Now!</button>
            </div>

            {/* section-five */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-middlePurple md:px-20 px-8 py-20 gap-16 md:gap-0">
                <div className="flex flex-col gap-6 lg:w-[50%]">
                    <h1 className="md:text-[3rem] text-[1.8rem] font-bold text-white md:leading-[4rem] md:w-[80%]">Find The Right Portfolio That Matches Your Needs</h1>
                    <p className="text-white md:w-[62%] w-[85%] md:text-[1.1rem] text-[0.9rem] md:leading-[1.5rem] leading-[1.3rem]">Search through a large number of portfolios on portfodia to find the one that matches your organization’s needs.</p>
                    <button className="text-black rounded-md py-3 px-6 bg-white md:w-[40%] w-[60%] font-semibold mt-10">Find Portfolio</button>
                </div>
                <div><img src="images/Rectangle 1467 (3).png" className="md:w-[30rem]" alt="" /></div>
            </div> 

            {/* section-six */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-middleGray md:px-20 px-8 py-20 gap-16 md:gap-0">
                <div><img src="images/Rectangle 1467.png" className="md:w-[25rem]" alt="" /></div>
                <div className="flex flex-col gap-6 lg:w-[50%]">
                    <h1 className="md:text-[3rem] text-[1.8rem]  font-extrabold text-deepBlue md:w-[90%] md:leading-[3.8rem]">Verify Projects, And Experiences Provided In Portfolios</h1>
                    <p className="text-deepBlue md:w-[80%] w-[95%] text-[1rem]">Verify projects, experiences and references provided in portfolio through a one click mail.</p>
                    <button className="text-white text-[0.9rem] md:text[1rem] rounded-md py-2 px-4 bg-deepBlue md:w-[40%] w-[60%] font-semibold">Get Started Now!</button>
                </div>
            </div>

            {/* most-viewed */}
            <div className="lg:px-20 px-6 py-20">
                <h1 className="font-semibold lg:text-2xl text-1xl py-3">Most Viewed Portfolios</h1>
                <div className="flex items-center justify-between"> 
                    <div className="lg:w-56 lg:h-60 h-48 w-40 bg-[url('/images/Rectangle-1347(1).png')] bg-cover bg-center rounded-b-3xl rounded-t-3xl">
                        {/* gradient-color */}
                        <div className="bg-gradient-to-b from-transparent lg:w-56 lg:h-60 h-48 w-40 to-black bg-blend-overlay bg-cover bg-center rounded-3xl">

                            {/* indidvidual cards */}
                            <div className="text-white px-5 pt-28 lg:pt-36 flex flex-col gap-1">
                                <h1 className="font-semibold  lg:text-sm text-[0.7rem]">Seyi Ajigbona</h1>
                                <p className="text-[0.5rem]">Product designer</p>
                                <div className="flex items-center gap-2">
                                    <p className="border rounded-3xl border-white lg:text-[0.5rem] text-[0.4rem] px-2 ">UX</p>
                                    <p className="border rounded-3xl border-white lg:text-[0.5rem] text-[0.4rem] px-2 ">Web</p>
                                    <p className="border rounded-3xl border-white lg:text-[0.5rem] text-[0.4rem] px-2">Graphics</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="flex items-center"><IoHeart className="text-[0.8rem]"/><span className="text-[0.6rem]">115</span></p>
                                    <p className="flex items-center"><IoEyeSharp className="text-[0.8rem]" /><span className="text-[0.6rem]">11.2k</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-56 lg:h-60 h-48 w-40 bg-[url('/images/Rectangle-1347(2).png')] bg-cover bg-center  rounded-b-3xl rounded-t-3xl">
                        {/* gradient color */}
                        <div className="bg-gradient-to-b from-transparent w-40 lg:w-56 lg:h-60 h-48 to-black bg-blend-overlay bg-cover bg-center rounded-3xl">

                            {/* individual cards */}
                            <div className="text-white px-5 lg:pt-36 pt-28 flex flex-col gap-1">
                                <h1 className="font-semibold lg:text-sm text-[0.7rem]">Felicia Badmus</h1>
                                <p className="text-[0.5rem]">Data Analyst</p>
                                <div className="flex items-center gap-2">
                                    <p className="border rounded-3xl border-white lg:text-[0.5rem] text-[0.4rem] px-2 ">Data</p>
                                    <p className="border rounded-3xl border-white lg:text-[0.5rem] text-[0.4rem] px-2 ">Analysis</p>
                                    <p className="border rounded-3xl border-white lg:text-[0.5rem] text-[0.4rem] px-2">Excel</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="flex items-center"><IoHeart className="text-[0.8rem]"/><span className="text-[0.6rem]">115</span></p>
                                    <p className="flex items-center"><IoEyeSharp className="text-[0.8rem]" /><span className="text-[0.6rem]">11.2k</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-56 h-60 bg-[url('/images/Rectangle-1347(3).png')] bg-cover bg-center  rounded-b-3xl rounded-t-3xl md:block hidden">
                        <div className="bg-gradient-to-b from-transparent w-56 h-60 to-black bg-blend-overlay bg-cover bg-center rounded-3xl">

                            {/* individual cards */}
                            <div className="text-white px-5 pt-36 flex flex-col gap-1">
                                <h1 className="font-semibold text-sm">Elizabeth Queen</h1>
                                <p className="text-[0.7rem]">Hr Specialist</p>
                                <div className="flex items-center gap-2">
                                    <p className="border rounded-3xl border-white text-[0.5rem] px-2 ">HR</p>
                                    <p className="border rounded-3xl border-white text-[0.5rem] px-2 ">CPU</p>
                                    <p className="border rounded-3xl border-white text-[0.5rem] px-2">Management</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="flex items-center"><IoHeart className="text-[0.8rem]"/><span className="text-[0.6rem]">115</span></p>
                                    <p className="flex items-center"><IoEyeSharp className="text-[0.8rem]" /><span className="text-[0.6rem]">11.2k</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-56 h-60 bg-[url('/images/Rectangle-1347(4).png')] bg-cover bg-center  rounded-b-3xl rounded-t-3xl md:block hidden">
                        <div className="bg-gradient-to-b from-transparent w-56 h-60 to-black bg-blend-overlay bg-cover bg-center rounded-3xl">

                            {/* individual cards */}
                            <div className="text-white px-5 pt-36 flex flex-col gap-1">
                                <h1 className="font-semibold text-sm">Mathew Johnson</h1>
                                <p className="text-[0.7rem]">Financial Advisor</p>
                                <div className="flex items-center gap-2">
                                    <p className="border rounded-3xl border-white text-[0.5rem] px-2 ">Finance</p>
                                    <p className="border rounded-3xl border-white text-[0.5rem] px-2 ">Money</p>

                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="flex items-center"><IoHeart className="text-[0.8rem]"/><span className="text-[0.6rem]">115</span></p>
                                    <p className="flex items-center"><IoEyeSharp className="text-[0.8rem]" /><span className="text-[0.6rem]">11.2k</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-56 h-60 bg-[url('/images/Rectangle-1347(5).png')] bg-cover bg-center  rounded-b-3xl rounded-t-3xl md:block hidden">
                        <div className="bg-gradient-to-b from-transparent w-56 h-60 to-black bg-blend-overlay bg-cover bg-center rounded-3xl">

                            {/* individual cards */}
                            <div className="text-white px-5 pt-36 flex flex-col gap-1">
                                <h1 className="font-semibold text-sm">Mary James</h1>
                                <p className="text-[0.7rem]">Full stack developer</p>
                                <div className="flex items-center gap-2">
                                    <p className="border rounded-3xl border-white text-[0.5rem] px-2 ">Web development</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="flex items-center"><IoHeart className="text-[0.8rem]"/><span className="text-[0.6rem]">115</span></p>
                                    <p className="flex items-center"><IoEyeSharp className="text-[0.8rem]" /><span className="text-[0.6rem]">11.2k</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

             {/*section-seven  */}
             <div className="py-20 md:px-20 px-6 bg-lightOrange flex flex-col items-center gap-6">
                <h1 className="md:text-4xl text-2xl font-extrabold md:font-extrabold md:w-[50%]  text-center">Get Premium And Find Your Next Talent Here On Portfodia</h1>
                <p className="md:w-[36%] text-[0.8rem] md:text-[1rem] text-center leading-5">The world’s leading brands use Porfodia to Hire talents. Browse through millions of portfolio to find the right one that fits your needs</p>
                <button className="text-white bg-black rounded-md py-2 px-6 mt-16 font-semibold ">Get Premium Plan!</button>
                <p className="text-black text-center">Have You Built Your Portfolio <a href="#" className="underline font-semibold">Build Your Portfolio</a></p>
            </div>

            {/* grid-layout */}
            <div className="flex items-center gap-4  md:px-28 px-6 py-20">
                <div className="flex items-center flex-col gap-4">
                    <div className="">
                        <img src="images/Group 1000006839.png" alt="" />
                    </div>
                    <div className="">
                        <img src="images/Group 1000006838.png" alt="" />
                    </div>
                    <div className="block md:hidden ">
                        <img src="images/Group 1000006837.png" alt="" />
                    </div>
                </div>

                <div className="hidden md:block ">
                    <img src="images/Group 1000006837.png" alt="" />
                </div>
            </div>

            {/* frequently-asked-questions */}
            <Faq />

            {/* section-eight */}
            <div className="py-20 md:px-20 px-6 bg-lightOrange flex flex-col items-center gap-6">
                <h1 className="md:text-[2.25rem] text-[1.5rem] leading-12 font-bold md:w-[50%] w-[80%]  text-center">Kickstart Your Career With The Perfect Portfolio Today!</h1>
                <p className="md:w-[30%] text-[0.8rem] md:text-[1rem] text-center md:leading-7 leading-5">Bring All Your Resume Into One Platform, Add Collaborators To Project</p>
                <button className="text-white bg-black rounded-md py-2 px-6 mt-16 font-semibold ">Get Started Now!</button>
            </div>
        </div>
     );
}
 
export default Sections;