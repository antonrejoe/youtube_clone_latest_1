import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { ReactDOM } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
    <>

    <BrowserRouter>

      <Routes>

      <Route  link='/Sidebar/' element={<Sidebar/>}/>

      </Routes>
    </BrowserRouter>
      <Navbar/>
      <Sidebar/>



    </>
      
        
   
  );
}

export default App;
