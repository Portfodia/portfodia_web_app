import NavBarLoggedIn from "../components/Navbar/navBarLoggedIn";
import LoggedInHero from "../components/Hero/LoggedInHerro";
import SearchFields from "../components/searchFields/SearchFields";
import Featured from "../components/sections/Featured/Featured";
import DesignPortfolio from "../components/portfolios/DesignPortfolio";
import Premium from "../components/sections/Premium";
import DeveloperPortfolio from "../components/portfolios/DeveloperPortfolio";
import Footer from "../components/footer/footer";
const LoggedInHomePage = () => {
    return ( 
        <div>
            <NavBarLoggedIn />
            <LoggedInHero />
            <SearchFields />
            <Featured />
            <DesignPortfolio />
            <DeveloperPortfolio />
            <Premium />
            <Footer />
        </div>
     );
}
 
export default LoggedInHomePage;