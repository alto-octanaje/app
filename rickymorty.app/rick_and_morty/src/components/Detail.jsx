import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";



const  Detail=()=>{

   const {detailId} = useParams(); // buco entre todo los parametros el que nececito "detailId"
   const [ character,setCharacter]=useState({ }); // el tipo de dato local "{}"

   useEffect(() => {       // sumulamos los ciclos de vida 
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
          if (char.name) {
            setCharacter(char);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((err) => {
          window.alert("No hay personajes con ese ID");
        });
      return setCharacter({});
    }, [detailId]);

   return (
   <div > 
      <div>
      <button> <Link to="/home" >back</Link> </button>
        <h2>Detail</h2>
        <p>{character?.name}</p>
        <p>{character?.species}</p>
        <p>{character?.gender}</p>
        <p>{character?.origin?.name}</p>
        <img src={character?.image} alt={character.name} />
      </div>
   </div>)
}

export default Detail;
  