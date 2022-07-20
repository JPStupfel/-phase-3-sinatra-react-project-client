import React from 'react';
import { ReactDOM } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
// import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Narrative from './components/Narrative';


function App() {
  return (
    <>
 
   <BrowserRouter>
   <div>
   <Link to="/">NoteBook</Link> 
   </div>
   <div>
   <Link to="/Narratives">Narratives</Link>
   </div>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Narratives" element={<Narrative/>} />
   </Routes>
   </BrowserRouter>
   
   </>

   
  );
}

export default App;
