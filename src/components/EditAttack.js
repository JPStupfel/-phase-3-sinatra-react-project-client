import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';


export default function EditAttack({currentAttack, handlePatchAttack, setIsEdit}){
    const [attackMod, setAttackMod] = useState(currentAttack)

    function handleChange(event){
        let newAttack = {...currentAttack}
        newAttack[event.target.id] = event.target.value
        setAttackMod(newAttack)
        console.log(newAttack)
    }

    //1. post request
    //2. update app state based on changes
    function handleSubmit(event){
        
        event.preventDefault();
        handlePatchAttack(attackMod)
        setIsEdit(prev=>!prev)
    }
    return(
        <form
        onSubmit={handleSubmit}>
        <div class="container-fluid">

            <h1 class="mt-4">Details on this Attack!</h1>
            
            <p>This Attack has a name of 
                <input 
                    id='name' 
                    value={attackMod.name}
                    onChange={handleChange}
                    >
                </input> 
            </p>
            
            <p>result of 
                <input 
                    id='result' 
                    value={attackMod.result}
                    onChange={handleChange}
                    >
                </input> .
            </p>
            
            <p>notes: 
                <input 
                    id='notes' 
                    value={attackMod.notes}
                    onChange={handleChange}
                    >
                </input> 
            </p>
            
            <p>Change Image Source
                <input 
                    id='image' 
                    value={attackMod.image}
                    onChange={handleChange}
                    >
                </input> 
                <img 
                    className="image-box" 
                    src={attackMod.image}>  
                </img>
             </p>

        </div>
        <button type='submit'>Submit</button>
        </form>
    
        )
}