import React from "react"
import AttackCard from "./AttackCard"
import 'bootstrap/dist/css/bootstrap.css';


export default function AttackCardContainer({attackList}){


    const attackCards = attackList.map(e=><AttackCard attack={e} key={e.id}/>)
    

    return(
        <div class="bg-light border-right vh-100" id="sidebar-wrapper">
        <div class="sidebar-heading">BJJ Attacks </div>
        <div class="list-group list-group-flush overflow-auto h-100">
          
            {attackCards}
        </div>
    </div>

        )
}