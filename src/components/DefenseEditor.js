import React, {useState} from "react";

export default function DefenseEditor ({currentDefense, setIsEditDefense, handleDefensePatchSubmit}) {

    const [defenseMod, setDefenseMod] = useState(currentDefense)

    function handleChange(event){
       let newDefense = {...defenseMod}
       newDefense[event.target.id] = event.target.value
       setDefenseMod(newDefense)
    }

    function handleSubmit(event){
        event.preventDefault()
         handleDefensePatchSubmit(defenseMod)
        setIsEditDefense(false)
    }

    
    
    return (
<form  onSubmit={handleSubmit}>
    <h1 className="mt-4">Edit this Defense!</h1>
    <input onChange={handleChange} id="name" value={defenseMod.name}></input>
    <input onChange={handleChange} id='result' value={defenseMod.result}></input>
    <input onChange={handleChange} id='notes' value={defenseMod.notes}></input>
    <button type="submit" >Submit</button>
    <button onClick={()=>setIsEditDefense(prev=>!prev)}>Cancel</button>
</form> )

}
