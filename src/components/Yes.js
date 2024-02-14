import Draggable from "react-draggable";
import bgImage from "../assets/bg.jpeg"
import paper from "../assets/paper.webp"
import circle from "../assets/paper-modified.png"
import prita from "../assets/prita2.jpeg"
import bccha from "../assets/bccha.png"
import hand from "../assets/hand.jpeg"
import heart from "../assets/heart.webp"
import "./Yes.css";
function Yes(){
    return (
        <div className="yes  w-full flex  flex-col   items-center justify-center relative ">
           <img src={bgImage} className="max-w-maxContent flex flex-col "></img>

          
                <div className="absolute flex rounded-full bg-shadow-2">
                    <div className=" flex  rounded-full relative items-center justify-center">
                   <img src={circle} className=" rounded-full  w-[200px]  "></img>
                   <img  className="absolute w-[80%]" src={heart}></img>
                   </div>
                    </div>
                
           
           <Draggable>
                <div className="absolute flex  bg-shadow-2">
                    <div className=" flex relative items-center justify-center">
                   <img src={paper} className=" rotate-[17deg]  w-[250px] "></img>
                   <p className=" italic mb-7  font-semibold text-blue-600 blue-200 rotate-[17deg] font-sans absolute">Drag the paper to move</p>
                   <img className=" absolute mr-[10px] rotate-[17deg] h-[140px] w-[190px] mt-[10px]"src={bccha}></img>
                   </div>
                    </div>
                </Draggable> 
                <Draggable>
                <div className="absolute flex  bg-shadow-2">
                    <div className=" flex relative items-center justify-center">
                   <img src={paper} className=" rotate-[17deg] h-[200px] w-[200px] "></img>
                   <p className=" italic mb-[170px] ml-[60px] font-semibold text-blue-600 blue-200 rotate-[17deg] font-sans absolute">and I fallen in love </p>
                   <p className=" italic  mb-[110px] ml-[60px] p-2 font-semibold text-blue-600 blue-200 rotate-[17deg] font-sans absolute">with you</p>
                   <img className=" absolute mr-[10px] rotate-[17deg] h-[]170px] w-[170px] mt-[50px]"src={prita}></img>
                   </div>
                    </div>
                </Draggable> 
                
                <Draggable>
                <div className="absolute flex  bg-shadow-2">
                    <div className=" flex relative items-center justify-center">
                   <img src={paper} className=" rotate-[17deg] h-[200px] w-[200px] "></img>
                   <p className=" italic mb-[100px] ml-[50px] font-semibold text-blue-600 blue-200 rotate-[17deg] font-sans absolute">You are my Favourite person</p>
                   <img className=" absolute mr-[10px] rotate-[17deg] h-[120px] w-[150px] mt-[70px]"src={hand}></img>
                   </div>
                    </div>
                </Draggable> 
                <Draggable>
                <div className="absolute flex  bg-shadow-2">
                    <div className=" flex relative items-center justify-center">
                   <img src={paper} className=" rotate-[17deg] h-[100px] w-[300px] "></img>
                   <p className=" italic mb-7  font-semibold text-blue-600 blue-200 rotate-[17deg] font-sans absolute">How can be someone</p>
                   <p className=" italic   font-semibold text-blue-600 blue-200 rotate-[17deg] font-sans absolute">so cute</p>
                   </div>
                    </div>
                </Draggable> 
                <Draggable>
                <div className="absolute flex mt-12 bg-shadow-2">
                    <div className=" flex relative items-center justify-center">
                   <img src={paper} className=" rotate-[17deg] h-[100px] w-[300px] "></img>
                   <p className=" italic mb-7  font-semibold text-blue-600 blue-200 rotate-[17deg] font-sherif absolute">Drag the paper to move</p>
                   </div>
                    </div>
                </Draggable> 
    
        </div>
    )
}

export default Yes