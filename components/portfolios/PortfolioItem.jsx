import { IoHeart } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
const PortfolioItem = ({coverImage, profileImage, name}) => {
    return ( 
        <div className="flex flex-col gap-2 w-[22.5rem]">
            <img src={coverImage} alt="" />
            <div className="flex items-start justify-between">
                <img src={profileImage} alt="" />
                <div className="pb-2">
                    <p className="font-semibold text-[0.7rem] lg:text-[0.9rem] pb-2">{name}</p>
                    <p className="text-[0.8rem] font-semibold">Product Designer <span>5 years</span></p>
                    <p className="text-[0.8rem] text-deepGray font-semibold">Ojo. Lagos, Nigeria . <span>Open to work</span></p>
                </div>
                <img src="images/save.png" alt="" />
            </div>
            <div className="flex items-center justify-between">
                <button className="border rounded-3xl border-deepGray text-deepGray font-semibold lg:text-[0.7rem] text-[0.4rem] px-4 py-1 ">View Portfolio</button>
                <div className="flex items-center gap-3">
                    <p className="flex items-center"><IoHeart className="text-[0.8rem]"/><span className="text-[0.6rem]">115</span></p>
                    <p className="flex items-center"><IoEyeSharp className="text-[0.8rem]" /><span className="text-[0.6rem]">11.2k</span></p>
                </div>
            </div>
        </div>
     );
}
 
export default PortfolioItem;