import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import AttackInfoPage from "./AttackInfoPage";


export default function AttackInfoContainer({currentAttack,handlePatchAttack,handleDeleteAttack,defenseList}){
    
    
    return(
        <>
        {
            currentAttack.id ?
                <AttackInfoPage 
                currentAttack={currentAttack} 
                handlePatchAttack={handlePatchAttack}
                handleDeleteAttack={handleDeleteAttack}
                defenseList={defenseList}
                /> 
            :
                <>Select an Attack to Begin</>
        }
        </>
        )
}