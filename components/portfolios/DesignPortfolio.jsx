import { Portfolio } from "./PortfolioData";
import PortfolioItem from "./PortfolioItem";
const DesignPortfolio = () => {
    return ( 
        <div className="md:px-20 px-6">
            <h1 className="font-semibold lg:text-2xl text-1xl py-3">Top UI/UX Design Portfolio</h1>
            <div className="flex items-center justify-center gap-12 flex-wrap">
                {Portfolio.map(item => (
                    <PortfolioItem 
                        key={item.id}
                        coverImage={item.coverImage}
                        profileImage={item.profileImage}
                        name={item.name}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default DesignPortfolio;