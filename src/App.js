import React from 'react';
import Main from './Components/Main';
import './Components/style.css';
import MovieDetail from './Components//MovieDetail/MovieDetail';
import Login from './Components//LoginPage/Login';
import Private from './Components/ProtectRoute/ProtectRoute';
import {BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
   <BrowserRouter>
     <Routes>
     
     <Route path='/' element={<Login/>}></Route>
     
      <Route path='/main' element={<Private Component={Main}/>}></Route>
      <Route path="movie/:id" element={<MovieDetail />}></Route>
     

     </Routes>
   </BrowserRouter>
      
    </>
  );
}

export default App;
