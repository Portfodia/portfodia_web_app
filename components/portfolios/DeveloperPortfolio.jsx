import { Portfolio } from "./PortfolioData";
import PortfolioItem from "./PortfolioItem";
const DeveloperPortfolio = () => {
    return ( 
        <div className="md:px-20 px-6 py-20">
        <h1 className="font-semibold lg:text-2xl text-1xl py-3">Top App Developer Portfolio</h1>
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
 
export default DeveloperPortfolio;