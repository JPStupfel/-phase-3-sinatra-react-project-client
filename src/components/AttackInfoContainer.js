import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import AttackInfoPage from "./AttackInfoPage";


export default function AttackInfoContainer({currentAttack,
    handlePatchAttack,
    handleDeleteAttack,
    defenseList,
    handleDefensePatchSubmit,
    setCurrentDefense,
    currentDefense,
    handleDeleteDefense}){
    
        
    return(
        <>
        {
            currentAttack.id ?
                <AttackInfoPage 
                currentAttack={currentAttack} 
                handlePatchAttack={handlePatchAttack}
                handleDeleteAttack={handleDeleteAttack}
                defenseList={defenseList}
                handleDefensePatchSubmit={handleDefensePatchSubmit}
                setCurrentDefense={setCurrentDefense}
                currentDefense={currentDefense}
                handleDeleteDefense={handleDeleteDefense}
                /> 
            :
                <>Select an Attack to Begin</>
        }
        </>
        )
}