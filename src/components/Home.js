import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';




import AttackCardContainer from "./AttackCardContainer"
import AttackInfoContainer from "./AttackInfoContainer";


export default function Home(props){

    const [attackList, setAttackList] = useState([])

    useEffect(
        ()=> {fetch('http://localhost:9292/attacks').then(r=>r.json()).then(d=>setAttackList(d)) }
        ,[]
    )

    return(
        <div class="d-flex" id="wrapper">
        <AttackCardContainer attackList={attackList} />
        <AttackInfoContainer />
        
    </div>
        
    )
}