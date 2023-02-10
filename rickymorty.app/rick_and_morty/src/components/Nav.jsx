//  pagina que se muestra en todo momento y entoda las pestañas
import style from "./Nav.module.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav =({onSearch})=>{
  return(
    <nav className={style.Nav} >
        <Link to="home" > Home </Link>
        <Link to="favorite" > Favorite </Link>
        <Link to="about" > About </Link>
        <SearchBar onSearch={onSearch} />
    </nav>
  )  
}

export default Nav; 