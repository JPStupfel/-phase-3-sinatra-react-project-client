import React from "react"
import AttackCard from "./AttackCard"

export default function AttackCardContainer({attackList}){


    const attackCards = attackList.map(e=><AttackCard attack={e} key={e.id}/>)
    

    return(
        <ul style={{'display': 'inline'}}>
           {attackCards}
        </ul>

        )
}