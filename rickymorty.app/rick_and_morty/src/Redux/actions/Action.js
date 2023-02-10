import { ADD_FAVORITE,DELETE_FAVORITE   } from "./action_type";

export const add_favorite=(character)=>{
    return{type: ADD_FAVORITE, payload: character }
}

export const delete_favorite=(id)=>{
    return{type: DELETE_FAVORITE, payload: id }
}

// react-redux > 
// importas las action.type y payload...
// funcion que retorna un objeto con type y el dato del payload < react-redux 