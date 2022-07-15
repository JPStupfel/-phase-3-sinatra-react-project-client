import React from "react"
import 'bootstrap/dist/css/bootstrap.css';


export default function DefenseCard({defense}){


    return(

        <a onClick={()=>console.log(defense)} href="#" class="list-group-item list-group-item-action bg-light">{defense.name}</a>

        )
}