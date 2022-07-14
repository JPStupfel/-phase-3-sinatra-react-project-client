import React from "react";
import { useState, useEffect } from "react";
import '../App.css';


import AttackCardContainer from "./AttackCardContainer"


export default function Home(props){

    const [attackList, setAttackList] = useState([])

    useEffect(
        ()=> {fetch('http://localhost:9292/attacks').then(r=>r.json()).then(d=>setAttackList(d)) }
        ,[]
    )

    return(
        <div style={{'display':"flex"}} >

            <div className="box">
                <div>BJJ Attacks</div>
                <AttackCardContainer attackList={attackList}/>
            </div>

            <div className="box">

                <div style={{'width':'300px'}}>
                    <img style={{'width':'inherit'}} src='https://evolve-mma.com/wp-content/uploads/2022/01/bia-mesquita-2-2.jpg'/>
                </div>
            </div>


        </div>
        
    )
}