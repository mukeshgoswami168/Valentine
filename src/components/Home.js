import { Link } from "react-router-dom"


function Home(){
    return(
        <div className=" flex  flex-col items-center text-center justify-center mt-[40px]">
              <div className="flex flex-col w-[20%] border-gray-800 ">
              <p className=" italic  text-2xl ml-[-10px]">Dear <span className="font-bold">Prita ,</span></p>
            <p className=" italic mt-2">Be lated <span className="font-bold">Happy Valentines Day</span> </p>
            
            <p className=" mt-8 italic ml-[-10px]">I want you to be my valentine on every Valentine's Day of my life.</p>
            <p className=" font-semibold mt-4 italic ">will you be ?</p>
              </div>
              <div className="flex items-center justify-center ">
              <div className="mt-11 font-bold italic text-xl mr-[110px] p-2 border-2  bg-pink-300 flex ">
              <Link to="/yes">Yeah ,sure</Link>
              </div>
              <div className="mt-11 font-bold italic border-2  bg-pink-300 w-[80px] text-xl">
              <Link to="/no">No</Link>
                </div> 

                </div> 
                
                {/* <div className="mt-[250px] ml-[970px]">
                    <p className="italic">By Mukku</p>
                 </div> 
                 <div className="italic">
                    <Link to="/important">Important Notice</Link>
                    
                    </div>    */}

                    <div className="flex flex-reverse w-full justify-between mt-[200px]">
                    <Link to="/important" className="ml-4 border-2 italic p-2 font-bold"> Important Notice..</Link>
                        <div><p className="italic mr-4">By Mukku</p></div>
                       
                    </div>
        </div>
    )
}
export default Home