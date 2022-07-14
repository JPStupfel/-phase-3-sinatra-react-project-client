import React from "react";
import { useState, useEffect } from "react";

import AttackCardContainer from "./AttackCardContainer"


export default function Home(props){

    const [attackList, setAttackList] = useState([])

    useEffect(
        ()=> {fetch('http://localhost:9292/attacks').then(r=>r.json()).then(d=>setAttackList(d)) }
        ,[]
    )

    return(
        <div>
        <div>Hello World!</div>
        <AttackCardContainer attackList={attackList}/>
        </div>
        
    )
}