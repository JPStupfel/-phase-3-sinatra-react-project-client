import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


export default function PositionDropDownMenu({positions}){

    function DropDownItem({position}){
        return(
            <a class="dropdown-item" href="#">{position.name}</a>
        )
    }

    const positionsMap = positions.map(
        e=> <DropDownItem position={e} key={e.id}/>)
    
    return(
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
    </button>

    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {positionsMap}
    </div>

</div>    )
}