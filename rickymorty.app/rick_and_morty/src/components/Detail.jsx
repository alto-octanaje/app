import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const  Detail=()=>{

   const {detailId} = useParams();
   const [ character,setCharacter]=useState({});

   useEffect(() => {
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
   <div> 
       <h5> soy detail </h5>
       <p> lllegaomos </p>
   </div>)
}

export default Detail;
