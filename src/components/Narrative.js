import {React, useState, useEffect} from "react";

export default function Narrative(props){

    const [narratives, setNarratives] = useState([])
    const [isList, setIsList] = useState(false)

    useEffect(
        ()=>{fetch('http://localhost:9292/sequences').then(r=>r.json()).then(d=>setNarratives(d))}, []
    )

    function Narration({narrative}){return(
        <li>{narrative}</li>

    )}
    const narrativeCards = narratives.map(e=>
        <Narration narrative={e.narrative} key={e.narrative}/>
    )

    let randomNumber = Math.floor(Math.random() * narratives.length);
    
    console.log(randomNumber)

    return(
        <>
        <button onClick={()=>setIsList(prev=>!prev)}>
            {isList ? "Random" : 'List All'}
            </button>
            {isList ?
                <>{narrativeCards} </> : 
                <ul>{narrativeCards[randomNumber]}</ul>
             }
        </>
    )
}