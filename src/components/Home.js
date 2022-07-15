import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';



import AttackCardContainer from "./AttackCardContainer"
import AttackInfoContainer from "./AttackInfoContainer";
import AddAttack from "./AddAttack";


export default function Home(props){

    const [attackList, setAttackList] = useState([])
    const [currentAttack, setCurrentAttack] = useState({})
    const [isAdd, setIsAdd] = useState(false)

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
            .then((json) =>{
                setCurrentAttack(attackMod);

                let newAttackList = attackList.map(e=>e.id===attackMod.id ? attackMod : e)

                setAttackList(newAttackList)
                
                
            })
        
    }

    function handlePostAttack(attackMod){
   

        fetch(`http://localhost:9292/attacks`, {
            method: 'POST',
            body: JSON.stringify(attackMod),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) =>{
                
                let newAttackList = [...attackList, json]
                setAttackList(newAttackList)
                setIsAdd(prev=>!prev)
            })
    }

    function handleDeleteAttack(attack){
        fetch(`http://localhost:9292/attacks/${attack.id}`, {method: 'DELETE'})
            .then((response) => response.json())
            .then((json) => {
                debugger

                let newAttackList = attackList.filter(e=>e.id!==attack.id)

                setAttackList(newAttackList)
                setCurrentAttack({})
                
                
            })
        
    }



    return(
    <div className="d-flex" id="wrapper">

        <AttackCardContainer 
        handleClickAttack={handleClickAttack} 
        attackList={attackList}
        setIsAdd={setIsAdd} />

        { isAdd ?

            <AddAttack 
            handlePostAttack={handlePostAttack}
            setIsAdd={setIsAdd} />

         : 

            <AttackInfoContainer 
            currentAttack={currentAttack}
            handlePatchAttack={handlePatchAttack}
            handleDeleteAttack={handleDeleteAttack}
            />

        }
    </div>
        
    )
}