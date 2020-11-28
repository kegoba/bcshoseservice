import React from 'react';
import './App.css';
import './animate.css';

import {Footer} from "./components/footer/footer"

import Menu from "./components/menu/menu"

function App() {
  return (
    <div className="App" >
      
     <div className="">
       
       <Menu/>
      
     </div>
   
      <div className='footer'>
        <Footer />
      </div>
    </div>
     
    
  );
}

export default App;
