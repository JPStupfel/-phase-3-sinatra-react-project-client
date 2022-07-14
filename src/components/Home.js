import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';




import AttackCardContainer from "./AttackCardContainer"


export default function Home(props){

    const [attackList, setAttackList] = useState([])

    useEffect(
        ()=> {fetch('http://localhost:9292/attacks').then(r=>r.json()).then(d=>setAttackList(d)) }
        ,[]
    )

    return(
        <div class="d-flex" id="wrapper">
        <div class="bg-light border-right vh-100" id="sidebar-wrapper">
            <div class="sidebar-heading">Start Bootstrap </div>
            <div class="list-group list-group-flush overflow-auto h-100">
                <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 1</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 2</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 3</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 4</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 5</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 6</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 7</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 8</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 9</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 10</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 11</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 12</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 13</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Menu 14</a>
            </div>
        </div>
       
        <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>
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
            <div class="container-fluid">
                <h1 class="mt-4">Simple Sidebar</h1>
                <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
            </div>
        </div>
    </div>
        
    )
}