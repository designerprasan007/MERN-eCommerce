import tvimg from '../../../Assets/images/tv.jpeg';
import fridge from '../../../Assets/images/fridge.jpeg';
import laptopimg from '../../../Assets/images/laptop.png';
import mobileimg from '../../../Assets/images/mobile.jpeg';
import fashionimg from '../../../Assets/images/fashion.png';


const Catagories = () =>{
    return(
        <>
            <div className="testDiv">
                <div className="catagoryImgdiv">
                    <img className="catagoryImg" src={mobileimg}  alt="mobile"/>
                </div>
                <div className=" catagoryImgdiv">
                    <img className="catagoryImg" src={tvimg}  alt="tvimg"/>
                </div>
                <div className="catagoryImgdiv">
                    <img className="catagoryImg" src={laptopimg}  alt="laptop"/>
                </div>
                <div className="catagoryImgdiv">
                    <img className="catagoryImg" src={fridge}  alt="fridge"/>
                </div>
                <div className="catagoryImgdiv">
                    <img className="catagoryImg" src={fashionimg}  alt="fashionimg"/>
                </div>
                <div className="catagoryImgdiv">
                    <img className="catagoryImg" src={fashionimg}  alt="fashionimg"/>
                </div> <div className="catagoryImgdiv">
                    <img className="catagoryImg" src={fashionimg}  alt="fashionimg"/>
                </div> <div className="catagoryImgdiv">
                    <img className="catagoryImg" src={fashionimg}  alt="fashionimg"/>
                </div>

            </div>
        </>
    )
}

export default Catagories