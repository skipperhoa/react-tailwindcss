import React, { useState, useEffect , useReducer} from "react";
import { GET_ALL_CATEGORY, INSTALL_CATEGORY } from "../action";
import callApi from "../api";
import { reducer } from "../reducers";
export const MContext = React.createContext();
const initialTodos = {
  categories: [],
  products:[]
}

const MyProvider = (props) => {
   //check loading fetch api
   const [loading, setLoading] = useState(false);
   const [categories,setCategories]=useState([]);
   const [state, dispatch] = useReducer(reducer,initialTodos)
   //using useEffect call API
   useEffect(() => {
      setLoading(true);
      callApi(`https://hoanguyenit.com/api/categories`).then(res=>{
          console.log(res)
          setCategories(res.multiple);
          dispatch({type:INSTALL_CATEGORY,payload:res.multiple});
          setLoading(false)
     })
   }, [])

  return(
         !loading && <MContext.Provider value={{categories,state, dispatch}}>{props.children}</MContext.Provider>
  )

};
export default MyProvider;
