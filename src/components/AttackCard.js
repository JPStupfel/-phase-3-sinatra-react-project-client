import React from "react"
import 'bootstrap/dist/css/bootstrap.css';


export default function AttackCard({attack}){




    return(

        <a href="#" class="list-group-item list-group-item-action bg-light">{attack.name}</a>

        )
}