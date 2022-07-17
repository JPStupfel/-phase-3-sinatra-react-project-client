import React, {useState} from "react";
import DefenseEditor from "./DefenseEditor";
import DefenseContentDisplay from "./DefenseContentDisplay";

export default function DefenseDisplay({currentDefense, handleDefensePatchSubmit, handleDeleteDefense, isAddDefense}){
    


    const [isEditDefense, setIsEditDefense] = useState(false)








    return(
        <>
        {
        isEditDefense ?
        <DefenseEditor 
        currentDefense={currentDefense}
        setIsEditDefense={setIsEditDefense}
        handleDefensePatchSubmit={handleDefensePatchSubmit}/>
        
        :
        
        isAddDefense ? 
        
        <div>hello</div>


        :

       <DefenseContentDisplay 
       handleDeleteDefense={handleDeleteDefense}
       currentDefense={currentDefense} />
       
    }
    </>
    )
}