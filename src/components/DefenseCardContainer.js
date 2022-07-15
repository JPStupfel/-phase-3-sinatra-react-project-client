import React from "react"
import AttackCard from "./AttackCard"
import 'bootstrap/dist/css/bootstrap.css';
import DefenseCard from "./DefenseCard";


export default function DefenseCardContainer({ defenseList, currentAttack}){


    const showDefenses = defenseList.filter(e=>e.attack_id==currentAttack.id)
    console.log(showDefenses)

    const defenseCards = showDefenses.map(
        e=>
        <DefenseCard defense={e} key={e.id}/>         
        )
    

    return(
        <div style={{
            "width": "50%", 
            "border":"solid"
            }}  id="sidebar-wrapper">
            
            <div class="sidebar-heading">BJJ Defenses </div>

            <div class="list-group list-group-flush overflow-auto">
            
                {defenseCards}
            
            </div>
    </div>

        )
}