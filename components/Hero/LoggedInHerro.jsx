import { FiSearch } from "react-icons/fi";
const LoggedInHero = () => {
    return ( 
        <>
            <div className="text-white bg-gradient-to-br from-lightPurple via-middlePurple to-deepPurple h-[100vh] flex flex-col items-center justify-center gap-4 px-4 lg:px-0">
                <img src="images/peopleD.png" alt="" className="w-0 md:w-[70%] invisible md:visible" />
                <img src="images/peopleM.png" className="md:invisible visible px-6 md:w-0" alt="" />
                <h1 className="md:text-4xl text-3xl font-semibold md:w-[40rem] w-[17rem] text-center">Build your Portfolio, or Find one that matches your needs</h1>
                <p className="lg:w-[25rem] w-[17rem] text-center font-light text-sm">The future of hiring and bidding is headhunting and the future of job hunting is your digital reputation!</p>
            </div>
            <form className="flex items-center justify-between  bg-white px-6 py-3 rounded-md shadow-lg md:w-[70%] w-[80%] m-auto z-2 -mt-8">
                <div className="flex items-center gap-2">
                    <FiSearch className="text-deepGray" />
                    <input type="text" className=" outline-none placeholder:text-[0.85rem] md:max-w-96 max-w-20 text-ellipsis overflow-hidden md:overflow-visible" placeholder="Find a portfolio, keyword or person"/>
                </div>
                    <button className="bg-lightGreen py-1 px-4 text-white rounded-md flex items-center gap-2">
                        <img src="images/vector (2).png" alt="" />
                        <p>Filter</p>
                    </button>
            </form>
        </>
    );
}
 
export default LoggedInHero;