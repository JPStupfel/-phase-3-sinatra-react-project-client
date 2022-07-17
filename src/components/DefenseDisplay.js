import React, {useState} from "react";
import DefenseEditor from "./DefenseEditor";
import DefenseContentDisplay from "./DefenseContentDisplay";
import DefenseAddForm from "./DefenseAddForm";

export default function DefenseDisplay({
    currentDefense, 
    currentAttack, 
    handleDefensePatchSubmit, handleDeleteDefense, 
    isAddDefense, 
    setIsAddDefense, 
     handlePostDefense}){
    


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
        handlePostDefense={handlePostDefense}
        currentAttack={currentAttack}/>

        :

       <DefenseContentDisplay 
       handleDeleteDefense={handleDeleteDefense}
       currentDefense={currentDefense}
       setIsEditDefense={setIsEditDefense} />
       
    }
    </>
    )
}