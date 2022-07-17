import React, {useState} from "react";
import DefenseEditor from "./DefenseEditor";
import DefenseContentDisplay from "./DefenseContentDisplay";

export default function DefenseDisplay({currentDefense, handleDefensePatchSubmit, handleDeleteDefense, isAddDefense}){
    


    const [isEditDefense, setIsEditDefense] = useState(false)

    // function DefenseContentDisplay({currentDefense, handleDeleteDefense}){
        
    //     return <div >
    //     <h1 class="mt-4">Details on this Defense!</h1>
    //     <p>Defense Name: {currentDefense.name}</p>
    //     <p>Defense Result: {currentDefense.result}.</p>
    //     <p>Defense Notes: {currentDefense.notes}</p>
    //     <button onClick={()=>setIsEditDefense(prev=>!prev)}>Edit This Defense</button>
    //     <button 
    //     onClick={()=>handleDeleteDefense(currentDefense)
    //     }>Delete This Defense</button>

    // </div> }
    







    return(
        <>
        {
        isEditDefense ?
        <DefenseEditor 
        currentDefense={currentDefense}
        setIsEditDefense={setIsEditDefense}
        handleDefensePatchSubmit={handleDefensePatchSubmit}/>
        :
       <DefenseContentDisplay 
       handleDeleteDefense={handleDeleteDefense}
       currentDefense={currentDefense} />
       
    }
    </>
    )
}