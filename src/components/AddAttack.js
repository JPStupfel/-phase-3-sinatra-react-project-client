import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';


export default function AddAttack({ handlePostAttack, setIsAdd}){

    const [attackMod, setAttackMod] = useState({name:'',result:'',notes:'',image:''})

    function handleChange(event){
        let newAttack = {...attackMod}
        newAttack[event.target.id] = event.target.value
        setAttackMod(newAttack)
    }


    function handleSubmit(event){
        
        event.preventDefault();
        
        handlePostAttack(attackMod)
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
                <textarea 
                    id='notes' 
                    value={attackMod.notes}
                    onChange={handleChange}
                    >
                </textarea> 
            </p>
            
            <p>Add Image Source
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
        <button onClick={()=>setIsAdd(prev=>!prev)}>Cancel</button>
        </form>
    
        )
}