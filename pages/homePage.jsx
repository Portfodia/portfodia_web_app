import Navbar from "../components/Navbar/navBar";
import Hero from "../components/Hero/hero";
import Sections from "../components/sections/sections";
import Footer from "../components/footer/footer";
const NonLoggedHomePage = () => {
    return ( 
        <div>
            <Navbar />
            <Hero />
            <Sections />
            <Footer />
        </div>
     );
}
 
export default NonLoggedHomePage;