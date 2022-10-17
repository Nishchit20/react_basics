import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import FuncComp from './Components/Functional';
import ClassComp from './Components/ClassComponent';
import PageNotFound from './Components/PageNotFound';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Routes>
      <Route path="funcom" element={<FuncComp/>}></Route>
      <Route path="classcom" element={<ClassComp/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
     </Routes>
    </div>
  );
}

export default App;




