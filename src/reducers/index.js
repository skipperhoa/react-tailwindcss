import { GET_ALL_CATEGORY, INSTALL_CATEGORY } from "../action";

export const reducer = (state,action)=>{
    switch(action.type){
        case GET_ALL_CATEGORY:
            return state;
            break;
        case INSTALL_CATEGORY:
            return{
               ...state,
               categories:action.payload
            }
            break;
        default: 
            return state;
            break;
    }
}