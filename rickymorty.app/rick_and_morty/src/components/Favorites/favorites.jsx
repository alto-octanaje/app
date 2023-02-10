import { useSelector } from "react-redux";
import style from "./favorite.module.css";
import { Link } from "react-router-dom";



const Favorite=()=>{

    const { myFavorite } = useSelector(state =>state)

    return (
        // <h4>My Favoryte</h4>
        <div><h4>My Favorite</h4>{
            myFavorite.map((e)=>{
                return (
                <div className={style.favoritos} >
                     <Link to={`/detail/${e.id}`} > <h2>{e.name}</h2></Link>
                     <h2>{e.species}</h2>
                     <h2>{e.gender}</h2>
                    <img  src={e.image} alt="no se encontro la imagen" />
                </div>
            )
        })
            }</div>
    )

}


export default Favorite;

// react-redux > exportamos a "app" para renderizarlo...
// seleccionamos la propiedad del estado que nececitamos...
//  redereizas las propiedades que nececitas <react-redux 

