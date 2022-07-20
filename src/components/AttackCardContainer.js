import React from "react"
import AttackCard from "./AttackCard"
import PositionDropDownMenu from "./PositionDropDownMenu";
import 'bootstrap/dist/css/bootstrap.css';


export default function AttackCardContainer({
    handleClickAttack, 
    attackList, 
    setIsAdd, 
    setCurrentDefense,  
    positions,
    setPositions,
    setCurrentPosition
    }){


    const attackCards = attackList.map(e=><AttackCard attack={e} key={e.id} handleClickAttack={handleClickAttack}/>)
    

    return(
        <div className="bg-light border-right vh-100" id="sidebar-wrapper">
        <PositionDropDownMenu positions={positions} setCurrentPosition={setCurrentPosition}/>
        <div className="list-group list-group-flush overflow-auto h-100">
          
            {attackCards}
            <button onClick={()=>setIsAdd(p=>!p)}>Add Attack!</button>
        </div>
    </div>

        )
}