import React from "react"
import AttackCard from "./AttackCard"
import 'bootstrap/dist/css/bootstrap.css';


export default function AttackCardContainer({handleClickAttack, attackList, setIsAdd, setCurrentDefense}){


    const attackCards = attackList.map(e=><AttackCard attack={e} key={e.id} handleClickAttack={handleClickAttack}/>)
    

    return(
        <div class="bg-light border-right vh-100" id="sidebar-wrapper">
        <div class="sidebar-heading">BJJ Attacks </div>
        <div class="list-group list-group-flush overflow-auto h-100">
          
            {attackCards}
            <button onClick={()=>setIsAdd(p=>!p)}>Add Attack!</button>
        </div>
    </div>

        )
}