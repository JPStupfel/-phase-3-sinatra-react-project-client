import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

import AttackCardContainer from "./AttackCardContainer"
import AttackInfoContainer from "./AttackInfoContainer";
import AddAttack from "./AddAttack";


export default function Home(props){

    const [attackList, setAttackList] = useState([])
    const [defenseList, setDefenseList] = useState([])
    const [currentAttack, setCurrentAttack] = useState({})
    const [isAdd, setIsAdd] = useState(false)
    const [currentDefense, setCurrentDefense]=useState({})
    const [isAddDefense, setIsAddDefense] = useState(false)
    const [positions, setPositions]= useState([])
    const [currentPosition, setCurrentPosition] = useState({})

   

    useEffect(
        //    get only those attacks associated with a particular position, thus reducing client burden
        ()=> {if (currentPosition.id) {fetch(`http://localhost:9292/positions/${currentPosition.id}/attacks`).then(r=>r.json()).then(d=>setAttackList(d))} }
        ,[currentPosition]
    )
    useEffect(
        //    get only those defenses associated with a particular attack, thus reducing client burden
        ()=> {
            if (currentAttack.id){
            fetch(`http://localhost:9292/attacks/${currentAttack.id}/defenses`).then(r=>r.json()).then(d=>setDefenseList(d)) }
        }
        ,[currentAttack]
    )
    useEffect(
        ()=> {fetch('http://localhost:9292/positions').then(r=>r.json()).then(d=>setPositions(d)) }
        ,[]
    )


    function handleClickAttack(newAttack){
        setCurrentAttack(newAttack)
        setCurrentDefense({})
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
                

                let newAttackList = attackList.filter(e=>e.id!==attack.id)

                setAttackList(newAttackList)
                setCurrentAttack({})
                
                
            })
        
    }

    function handleDefensePatchSubmit(defenseMod){

        let newDefenseList = defenseList.map(e=>e.id===defenseMod.id ? defenseMod : e)
        setDefenseList(newDefenseList)

        setCurrentDefense(defenseMod)

        fetch(`http://localhost:9292/defenses/${defenseMod.id}`, {
            method: 'PATCH',
            body: JSON.stringify(defenseMod),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then(r=>r.json()).then(d=>console.log(d))


    }

    function handleDeleteDefense(defenseMod){
        fetch(`http://localhost:9292/defenses/${defenseMod.id}`, {method: 'DELETE'})
            .then((response) => response.json())
            .then((json) => {
                

                let newDefenseList = defenseList.filter(e=>e.id!==defenseMod.id)

                setDefenseList(newDefenseList)
                setCurrentDefense({})
                
                
            })
    }

    function handleAddDefense(){
        setIsAddDefense(prev=>!prev)
        console.log(isAddDefense)
    }

    function handlePostDefense(defenseMod){
   
        fetch(`http://localhost:9292/defenses`, {
            method: 'POST',
            body: JSON.stringify(defenseMod),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) =>{
                
                let newDefenseList = [...defenseList, json]
                setDefenseList(newDefenseList)
                setIsAddDefense(prev=>!prev)
                console.log(json)

            })
    }
        // console.log(defenseList)
    return(
    <div className="d-flex" id="wrapper">

        <AttackCardContainer 
        handleClickAttack={handleClickAttack} 
        attackList={attackList}
        setIsAdd={setIsAdd}
        setCurrentDefense={setCurrentDefense}
        positions={positions}
        setPositions={setPositions}
        setCurrentPosition={setCurrentPosition}
         />

        { isAdd ?

            <AddAttack 
            handlePostAttack={handlePostAttack}
            setIsAdd={setIsAdd} />

         : 

            <AttackInfoContainer 
            currentAttack={currentAttack}
            setCurrentAttack={setCurrentAttack}
            handlePatchAttack={handlePatchAttack}
            handleDeleteAttack={handleDeleteAttack}
            defenseList={defenseList}
            handleDefensePatchSubmit={handleDefensePatchSubmit}
            setCurrentDefense={setCurrentDefense}
            currentDefense={currentDefense}
            handleDeleteDefense={handleDeleteDefense}
            handleAddDefense={handleAddDefense}
            isAddDefense={isAddDefense}
            setIsAddDefense={setIsAddDefense}
            handlePostDefense={handlePostDefense}
            />

        }
    </div>
        
    )
}