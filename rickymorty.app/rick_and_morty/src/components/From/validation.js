
const validation = (userData) =>{
    let errors={};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username="el email es invalido";
    }
    if(!userData.username){ // si el input esta vacio
        errors.username="Esta Campo no puede estar vacío";
    }
    if(userData.username.length>33){ // el tamaño de lo que ingresas en el input 
        errors.username="El email no puede superar lo 35 caracteres";
    }
    if(userData.password.length < 6 || userData.password.length > 10){ // el tamaño de la password
        errors.password="la contraseña debe tener entre 6 y 10 caracteres"
    }
    if(!userData.password.match(/\d/)){ // esta rellex tetstea si el string tieni o no un numero da true
        errors.password="la contraseña debe contener un número";
    }
    return errors;
}


export default validation;


// una variable donde vamos aguradar todos lo errores let errors volvemos un {}