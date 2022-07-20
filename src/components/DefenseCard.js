import React from "react"
import 'bootstrap/dist/css/bootstrap.css';


export default function DefenseCard({defense, setCurrentDefense}){


    return(

        <a onClick={()=>setCurrentDefense(defense)} href="#" className="list-group-item list-group-item-action bg-light">{defense.name}</a>

        )
}