import React, {useState} from "react";
import DefenseEditor from "./DefenseEditor";
import DefenseContentDisplay from "./DefenseContentDisplay";
import DefenseAddForm from "./DefenseAddForm";

export default function DefenseDisplay({currentDefense, handleDefensePatchSubmit, handleDeleteDefense, isAddDefense, setIsAddDefense, handleDefensePostSubmit}){
    


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
        
        <DefenseAddForm 
        currentDefense={currentDefense}
        setIsAddDefense={setIsAddDefense}
        handleDefensePostSubmit={handleDefensePostSubmit}/>

        :

       <DefenseContentDisplay 
       handleDeleteDefense={handleDeleteDefense}
       currentDefense={currentDefense} />
       
    }
    </>
    )
}