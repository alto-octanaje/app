import styles from "./Card.module.css";
import { Link } from "react-router-dom";
// impor react-redux>
import { useState } from "react"; 
import { useDispatch } from "react-redux";
import { add_favorite, delete_favorite } from "../../Redux/actions/action";


export default function Card({name,gender, onClose,species,image,id}) {

 // react-redux >  
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);

   const handleFavorite =() => { 
      if(isFav){
         setIsFav(false);
         dispatch(delete_favorite(id));
      }
      else { 
         setIsFav(true);
         dispatch(add_favorite({name,gender, onClose,species,image,id}));
          }

   }


// -------------------------
   return (

      <div className={styles.divCard}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         } 
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`} > <h2>{name}</h2>  </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="no se encontro la imagen" />
      </div>
   ); 
}


// react-redux > hacer botones de favorito
// crear un estado local y  cambiar el stado local (boleano)
// y añadimos el corazon con la fn "handleFavorite" < react-redux >
 