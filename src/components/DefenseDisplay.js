import React from "react";

export default function DefenseDisplay({currentDefense}){
    return(
        <div >
        <h1 class="mt-4">Details on this Defense!</h1>
        <p>Defense Name: {currentDefense.name}</p>
        <p>Defense Result: {currentDefense.result}.</p>
        <p>Defense Notes: {currentDefense.notes}</p>
    </div> 
    
    )
}