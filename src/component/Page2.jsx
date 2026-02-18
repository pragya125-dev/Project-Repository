import "./Page2.css"
import Deluxe from "../assets/Deluxe.jpg"
import Superior from '../assets/Superior.jpg'
import Cottage from '../assets/Cottage.jpg'
function Page2(){
    return(
        <>
        <main className="container">
            <div className="row1">
                <h1><span className="blue">Available Room Types</span> <span className="brown">In Gokarna International Beach Resorty</span></h1>
                
            </div>
            <div className="row2">
                <div className="cards">
                <div className="image">
                    <img src={Deluxe} alt="bb"/>
                </div>
                <div className="text1">
                <h6><span className="title1">Deluxe Sea View Non A/c </span>
                 <span className="title2">Room</span></h6>
                </div>
                <button className="content"><h1>View More</h1></button>
                </div>
            
               <div className="cards">
                 <div className="image">
                    <img src={Superior} alt="bb"/>
                </div>
                <div className="text2">
                  <h6><span className="title1">Superior Sea View Non A/c </span>
                 <span className="title2">Room</span></h6>

                </div>
                <button className="content"><h1>View More</h1></button>
                </div>
                <div className="cards">
                <div className="image">
                    <img src={Cottage} alt="bb"/>
                </div>
               <div className="text3">
                   <div className="title3">
                    <h6>Cottage</h6>
                    </div>
                 </div>   
                <button className="content"><h1>View More</h1></button>
        </div>
        </div>
            <div className="row3"></div>
        </main>
        </>
    )
}
export default Page2