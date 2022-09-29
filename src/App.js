import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import { useState } from 'react';
import Search from './components/Search/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      {!isLoggedIn ? 
        (<Login onClick={()=> setIsLoggedIn(true)} />) :
        (<BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path= '/'element={<Login/>}/>
            <Route path= '/Card' element={<Card/>}/>
            <Route path= '/Search' element={<Search/>}/>
          </Routes>
        </BrowserRouter>
        )
      }
    </>
  );
}

export default App;
