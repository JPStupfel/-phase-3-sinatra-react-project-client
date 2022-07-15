import React, {useState} from "react";

export default function DefenseDisplay({currentDefense}){

    const [isEditDefense, setIsEditDefense] = useState(true)

    const Display = ()=> {return <div >
        <h1 class="mt-4">Details on this Defense!</h1>
        <p>Defense Name: {currentDefense.name}</p>
        <p>Defense Result: {currentDefense.result}.</p>
        <p>Defense Notes: {currentDefense.notes}</p>
        <button>Edit This Defense</button>
        <button>Delete This Defense</button>

    </div> }

const DefenseEditor = ({currentDefense})=> {

    const [defenseMod, setDefenseMod] = useState(currentDefense)

    function handleChange(event){
       let newDefense = {...defenseMod}
       newDefense[event.target.id] = event.target.value
       setDefenseMod(newDefense)
    }

    console.log(defenseMod)

    
    
    return (
<form >
    <h1 class="mt-4">Edit this Defense!</h1>
    <input onChange={handleChange} id="name" value={defenseMod.name}></input>
    <input onChange={handleChange} id='result' value={defenseMod.result}></input>
    <input onChange={handleChange} id='notes' value={defenseMod.notes}></input>
    <button type="submit">Submit</button>
    <button>Cancel</button>
</form> )

}





    return(
        <>
        {
        isEditDefense ?
        <DefenseEditor currentDefense={currentDefense} />
        :
       <Display />
       
    }
    </>
    )
}