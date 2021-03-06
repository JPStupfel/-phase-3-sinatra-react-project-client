import React from "react"
import AttackCard from "./AttackCard"
import 'bootstrap/dist/css/bootstrap.css';
import DefenseCard from "./DefenseCard";


export default function DefenseCardContainer({ 
    defenseList, 
    currentAttack, 
    setCurrentDefense, 
    handleAddDefense}){

    const showDefenses = defenseList.filter(e=>e.attack_id==currentAttack.id)

    const defenseCards = showDefenses.map(
        e=>
        <DefenseCard setCurrentDefense={setCurrentDefense} defense={e} key={e.id}/>         
        )
    
        // console.log(showDefenses)

    return(
        <div className="image-box"  id="sidebar-wrapper">
            
            <div className="sidebar-heading">BJJ Defenses </div>

            <div className="list-group list-group-flush overflow-auto">
            
                {defenseCards}

            <button
            onClick={handleAddDefense}
            >Add new Defense!</button>

            </div>
    </div>

        )
}