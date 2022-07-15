import React, {useState} from "react";
import DefenseEditor from "./DefenseEditor";

export default function DefenseDisplay({currentDefense, handleDefensePatchSubmit}){

    const [isEditDefense, setIsEditDefense] = useState(false)

    const DefenseContentDisplay = ({currentDefense})=> {return <div >
        <h1 class="mt-4">Details on this Defense!</h1>
        <p>Defense Name: {currentDefense.name}</p>
        <p>Defense Result: {currentDefense.result}.</p>
        <p>Defense Notes: {currentDefense.notes}</p>
        <button onClick={()=>setIsEditDefense(prev=>!prev)}>Edit This Defense</button>
        <button>Delete This Defense</button>

    </div> }
    







    return(
        <>
        {
        isEditDefense ?
        <DefenseEditor 
        currentDefense={currentDefense}
        setIsEditDefense={setIsEditDefense}
        handleDefensePatchSubmit={handleDefensePatchSubmit}/>
        :
       <DefenseContentDisplay currentDefense={currentDefense} />
       
    }
    </>
    )
}