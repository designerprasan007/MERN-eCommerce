import SearchBar from '../Partials/SearchBar';
import FooterNav from '../Partials/FooterNav';
// import Offers from '../Partials/Offers';
import Catagories from '../Partials/Catagories'
import './Shopping.css'
const Shopping = () =>{
    return(
        <div className="">
            <div className="shoppingNavbar">
                <SearchBar />
            </div>
            <div className="CatagoriesSection">
                <Catagories />
            </div>
            <div className="footerNavbar">
                <FooterNav />
            </div>
        </div>
    )
}

export default Shopping