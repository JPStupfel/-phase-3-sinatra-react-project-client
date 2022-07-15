import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import DefenseCardContainer from "./DefenseCardContainer";
import DefenseDisplay from "./DefenseDisplay";


export default function DisplayContent({currentAttack,defenseList}){

    const [showGif, setShowGif] = useState(true)
    console.log(defenseList)

    const [currentDefense, setCurrentDefense]=useState({})
    console.log(currentDefense)
    return(

        <div >
            <span style={{"display":"flex", "width":"100%"}} >
                <div className="image-box">
                    <h1 class="mt-4">Details on this Attack!</h1>
                    <p>This Attack has a name of {currentAttack.name}</p>
                    <p>result of {currentAttack.result}.</p>
                    <p>notes: {currentAttack.notes}</p>
                </div>
                
              
                <div className="image-box">
                    <button onClick={()=>setShowGif(e=>!e)}>{showGif ? "Hide Gif" : "Show Gif"}</button>
                    {
                    showGif ? 
                    <img className="image" src={currentAttack.image}></img> : <></> }
                </div>
                    
            </span>
            <span style={{"display":"flex", "width":"100%"}} >          

               <DefenseCardContainer
                currentAttack={currentAttack}
                defenseList={defenseList}
                setCurrentDefense={setCurrentDefense} />

            <div className="image-box">
                <DefenseDisplay currentDefense={currentDefense} />
            </div>

            </span>  
        </div>
    
        )
}