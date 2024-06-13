import { IoHeart } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";

const Featured = () => {
    return ( 
        <div>
            {/* featured */}
            <div className="lg:px-20 px-6 pb-20">
                <h1 className="font-semibold lg:text-2xl text-1xl py-3">Featured</h1>
                <div className="flex items-center justify-center gap-3 md:flex-wrap"> 
                    <div className="md:w-56 md:h-60 h-48 w-40 bg-[url('/images/Rectangle-1347(1).png')] bg-cover bg-center rounded-b-3xl rounded-t-3xl">
                        {/* gradient-color */}
                        <div className="bg-gradient-to-b from-transparent md:w-56 md:h-60 h-48 w-40 to-black bg-blend-overlay bg-cover bg-center rounded-3xl">

                            {/* indidvidual cards */}
                            <div className="text-white px-5 pt-28 md:pt-36 flex flex-col gap-1">
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
                    <div className="md:w-56 md:h-60 h-48 w-40 bg-[url('/images/Rectangle-1347(2).png')] bg-cover bg-center  rounded-b-3xl rounded-t-3xl">
                        {/* gradient color */}
                        <div className="bg-gradient-to-b from-transparent w-40 md:w-56 md:h-60 h-48 to-black bg-blend-overlay bg-cover bg-center rounded-3xl">

                            {/* individual cards */}
                            <div className="text-white px-5 md:pt-36 pt-28 flex flex-col gap-1">
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
        </div>
     );
}
 
export default Featured;