import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import DefenseCardContainer from "./DefenseCardContainer";


export default function DisplayContent({currentAttack,defenseList}){

    const [showGif, setShowGif] = useState(true)
    console.log(defenseList)

    return(

        <div >
            <span style={{"display":"flex", "width":"100%"}} >
                <div 
                style={{
                    // "display": "inline-block",
                    "border-style":"solid"
                    }}>
                    <h1 class="mt-4">Details on this Attack!</h1>
                    <p>This Attack has a name of {currentAttack.name}</p>
                    <p>result of {currentAttack.result}.</p>
                    <p>notes: {currentAttack.notes}</p>
                </div>
                
                <DefenseCardContainer
                currentAttack={currentAttack}
                defenseList={defenseList} />
            </span>

            <button onClick={()=>setShowGif(e=>!e)}>{showGif ? "Hide Gif" : "Show Gif"}</button>
            {
            showGif ? 
             <img className="image-box" src={currentAttack.image}></img> : <></> }
        </div>
    
        )
}