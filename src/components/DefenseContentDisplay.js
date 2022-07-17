import React from "react";

export default function DefenseContentDisplay({currentDefense, handleDeleteDefense, setIsEditDefense}){
    return(
        <div >
        <h1 class="mt-4">Details on this Defense!</h1>
        <p>Defense Name: {currentDefense.name}</p>
        <p>Defense Result: {currentDefense.result}.</p>
        <p>Defense Notes: {currentDefense.notes}</p>
        <button onClick={()=>setIsEditDefense(prev=>!prev)}>Edit This Defense</button>
        <button 
        onClick={()=>handleDeleteDefense(currentDefense)
        }>Delete This Defense</button>

    </div>
    )
}