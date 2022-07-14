import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';


export default function DisplayContent({currentAttack}){


    return(

        <div class="container-fluid">
            <h1 class="mt-4">Details on this Attack!</h1>
            <p>This Attack has a name of {currentAttack.name}</p>
            <p>result of {currentAttack.result}.</p>
            <p>notes: {currentAttack.notes}</p>
            {/* <img src={currentAttack.image}></img> */}
        </div>
    
        )
}