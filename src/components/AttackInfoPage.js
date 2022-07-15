import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import DisplayContent from "./DisplayContent";
import EditAttack from "./EditAttack";


export default function AttackInfoPage({
    currentAttack,
    handlePatchAttack,
    handleDeleteAttack,
    defenseList,
    handleDefensePatchSubmit,
    setCurrentDefense,
    currentDefense}){

    const [isEdit, setIsEdit] = useState(false)

    return(
        <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            
            <button onClick={()=>setIsEdit(e=>!e)} class="btn btn-primary" id="menu-toggle">{ isEdit ? 'Cancel' : 'Edit this Attack!'}</button>

            <button onClick={()=>handleDeleteAttack(currentAttack)} class="btn btn-primary" id="menu-toggle">Delete Attack!</button>

          
        </nav>
        {!isEdit ? 
        <DisplayContent 
        currentAttack={currentAttack}
        defenseList={defenseList}
        handleDefensePatchSubmit={handleDefensePatchSubmit}
        setCurrentDefense={setCurrentDefense}
        currentDefense={currentDefense}/> 
        : 
        <EditAttack 
        currentAttack={currentAttack} handlePatchAttack={handlePatchAttack} setIsEdit={setIsEdit}/>}
    </div>
        )
}