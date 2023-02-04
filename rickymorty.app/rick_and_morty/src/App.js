import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'

import About from './components/About';
import { Routes,Route, Router } from 'react-router-dom';
import Detail from './components/Detail';
 
function App () {

  const [characters,setCharacters]=useState([]);

  const onSearch=(character)=>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if(data.name){
          if (!isRepetida(data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('ya tienes este personaje');
         }
         }
         else { alert("no exite ese personaje")}
      })
  }

  function isRepetida(id) {
    let aux= false;
    characters.forEach((car)=>{
      if(car.id===id ) aux =true;
    });
    return aux;
    
  }

  const onClose=(id)=>{
    setCharacters(
      characters.filter(characters=> characters.id !== id)
    )

  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} />}  />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId'  element={ <Detail /> } />
        <Route path='/detail'  element={ <Detail /> } />
      </Routes>
       
    </div>
  )
}

export default App
