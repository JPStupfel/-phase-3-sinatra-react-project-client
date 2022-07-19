import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


export default function PositionDropDownMenu({positions, setCurrentPosition}){

    function DropDownItem({position}){
        return(
            <a class="dropdown-item" onClick={()=>setCurrentPosition(position)}>{position.name}</a>
        )
    }

    const positionsMap = positions.map(
        e=> <DropDownItem position={e} key={e.id}/>)
    
    return(
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select Position
    </button>

    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {positionsMap}
    </div>

</div>    )
}