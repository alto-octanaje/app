import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/action_type";

const initialState={
    myFavorite:[]
}
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_FAVORITE:
            return{ ...state,
                myFavorite: [...state.myFavorite ,action.payload]
            }
            
        case DELETE_FAVORITE:
            return{ ...state,
                myFavorite: state.myFavorite.filter((e)=>e.id!==action.payload)
             }
    
        default:
             return {...state};
    }
}

export default reducer;

//  react-redux > importamos todas varables de action-type...
// iniciamos un estado  con las propiedades que tenga...
// al retona el estado que es un {}...
// cada action.type return el estado + el dato de action.payload <react-redux:
