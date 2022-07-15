import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';




import AttackCardContainer from "./AttackCardContainer"
import AttackInfoContainer from "./AttackInfoContainer";


export default function Home(props){

    const [attackList, setAttackList] = useState([])
    const [currentAttack, setCurrentAttack] = useState({})


    useEffect(
        ()=> {fetch('http://localhost:9292/attacks').then(r=>r.json()).then(d=>setAttackList(d)) }
        ,[]
    )

    function handleClickAttack(newAttack){
        setCurrentAttack(newAttack)
    }   

    function handlePatchAttack(attackMod){
        fetch(`http://localhost:9292/attacks/${attackMod.id}`, {
            method: 'PATCH',
            body: JSON.stringify(attackMod),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) =>{console.log(json)})
        
    }

// console.log(currentAttack)



    return(
    <div className="d-flex" id="wrapper">

        <AttackCardContainer 
        handleClickAttack={handleClickAttack} 
        attackList={attackList} />

        <AttackInfoContainer 
        currentAttack={currentAttack}
        handlePatchAttack={handlePatchAttack}
        />
        
    </div>
        
    )
}