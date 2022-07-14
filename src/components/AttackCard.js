import React from "react"
import 'bootstrap/dist/css/bootstrap.css';


export default function AttackCard({attack, handleClickAttack}){






    return(

        <a onClick={()=>handleClickAttack(attack)} href="#" class="list-group-item list-group-item-action bg-light">{attack.name}</a>

        )
}