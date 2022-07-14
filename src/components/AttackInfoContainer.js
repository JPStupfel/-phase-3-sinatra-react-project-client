import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import AttackInfoPage from "./AttackInfoPage";


export default function AttackInfoContainer({currentAttack}){

    
    return(
        
        <AttackInfoPage currentAttack={currentAttack} />

        )
}