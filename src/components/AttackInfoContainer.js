import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import AttackInfoPage from "./AttackInfoPage";


export default function AttackInfoContainer({currentAttack,handlePatchAttack}){
    console.log(currentAttack)
    
    return(
        <>
        {
            currentAttack.id ?
                <AttackInfoPage 
                currentAttack={currentAttack} 
                handlePatchAttack={handlePatchAttack}
                /> 
            :
                <>Select an Attack to Begin</>
        }
        </>
        )
}