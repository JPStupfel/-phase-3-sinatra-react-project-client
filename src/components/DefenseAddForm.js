import React, {useState} from "react";

export default function DefenseAddForm ({setIsAddDefense, handlePostDefense, currentAttack}) {

    let dummyDefense = {name: "DummyDefense", notes: "Dummy", result: "Dummy", stage: "Dummy", attack_id: currentAttack.id}

    const [defenseMod, setDefenseMod] = useState(dummyDefense)

    function handleChange(event){
       let newDefense = {
        ...defenseMod
        }
       newDefense[event.target.id] = event.target.value
       setDefenseMod(newDefense)
    }

    function handleSubmit(event){
        event.preventDefault()
        handlePostDefense(defenseMod)
        // setIsAddDefense(false)
    }

    
    
    return (
<form  onSubmit={handleSubmit}>
    <h1 className="mt-4">Add a new Defense!</h1>
    <input onChange={handleChange} id="name" value={defenseMod.name}></input>
    <input onChange={handleChange} id='result' value={defenseMod.result}></input>
    <input onChange={handleChange} id='notes' value={defenseMod.notes}></input>
    <button type="submit" >Submit</button>
    <button onClick={()=>setIsAddDefense(prev=>!prev)}>Cancel</button>
</form> )

}
