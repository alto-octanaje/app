//  pagina que se muestra en todo momento y entoda las pestañas
import style from "./Nav.module.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav =({onSearch})=>{
  return(
    <nav className={style.Nav} >
        <Link to="about" >About</Link>
        <Link to="home" >Home</Link>
        <SearchBar onSearch={onSearch} />
    </nav>
  )  
}

export default Nav; 