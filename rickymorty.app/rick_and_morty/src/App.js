import './App.css'
import Cards from './components/Cards'
import Nav from './components/Nav'
import About from './components/About';
import Detail from './components/Detail';
import From from './components/From/From';  // el formulario vamos amanejar usan funcion userData

import { useEffect, useState } from 'react'
import { Routes,Route, useLocation, useNavigate } from 'react-router-dom';

import Favorite from './components/Favorites/favorites';

 
function App () {

  // validacion de usuario
  const [access , setAccess] = useState(false); // el stado es falso para ingresar
   const userName = "jei@gmail.com";
   const passWord = "123asd";
   const navigate = useNavigate();

   const login = (userData) => { // leenviamos por props fn.login al  From
    if(userData.username === userName && userData.password === passWord){
      setAccess(true)
      navigate('/home'); // es la direccion donde enviamos al usuario
    } 
  }
  
    useEffect(() => {
      !access && navigate('/') 
    },[access,navigate])
   
 
// --------------------generar las tarjetas-----------------------------------------
  //estado local para las tarjetas, llamado a la api y traer personaje 
  const [characters,setCharacters]=useState([]);
  const location= useLocation() // es{} propieda pahname /
  
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
         else { alert("no existe ese personaje")}
      })
  }
// funcion para no poner tarjetas repetidad 
  function isRepetida(id) {
    let aux= false;
    characters.forEach((car)=>{
      if(car.id===id ) aux =true;
    });
    return aux;
  }

// funcion para borrar tarjetas 
  const onClose=(id)=>{
    setCharacters(
      characters.filter(characters=> characters.id !== id)
    )
  }

  return (
    <div className='App' style={{ padding: '2px' }}>
      {location.pathname === "/" ? <From  login={login}  /> : <Nav onSearch={onSearch} />  }
      <Routes>        
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} />}  />
        <Route path='/detail/:detailId'  element={<Detail />} />
        <Route path='/detail'  element={<Detail />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/about' element={<About />} />
      </Routes>
       
    </div>
  )
}

export default App
 
// Formulario > despues de hacer el formulario controlado
// hacemos la validacion d un usuario para ingresar haciendo un estado local con una variable para guardar el email
// < Formulario
// react-redux > aca imortamos y renderizamos la ruta (favorites.js) 
// en el componente nav debes hacer el Link para que funcione la ruta <react-redux
