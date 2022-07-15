import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import DisplayContent from "./DisplayContent";
import EditAttack from "./EditAttack";


export default function AttackInfoPage({currentAttack,handlePatchAttack}){

    const [isEdit, setIsEdit] = useState(false)

    return(
        <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button onClick={()=>setIsEdit(e=>!e)} class="btn btn-primary" id="menu-toggle">{ isEdit ? 'Cancel' : 'Edit this Attack!'}</button>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        {!isEdit ? <DisplayContent currentAttack={currentAttack}/> : <EditAttack currentAttack={currentAttack} handlePatchAttack={handlePatchAttack} setIsEdit={setIsEdit}/>}
    </div>
        )
}