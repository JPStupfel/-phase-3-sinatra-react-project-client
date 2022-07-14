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

// console.log(currentAttack)



    return(
    <div className="d-flex" id="wrapper">

        <AttackCardContainer 
        handleClickAttack={handleClickAttack} 
        attackList={attackList} />

        <AttackInfoContainer currentAttack={currentAttack}/>
        
    </div>
        
    )
}