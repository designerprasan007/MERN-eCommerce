import NavBar from '../Partials/NavBar';
// import FooterNav from '../Partials/FooterNav';
// import Offers from '../Partials/Offers';
import Catagories from '../Partials/Catagories';
import Announcement from '../Partials/Announcement'
import './Shopping.css'
import Slider  from '../Partials/Slider';
const Shopping = () =>{
    return(
        <div className="">
            <Announcement />
            <NavBar />
            <Slider />
            <Catagories />
        </div>
    )
}

export default Shopping