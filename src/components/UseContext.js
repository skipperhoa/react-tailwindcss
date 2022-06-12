import React, { useState, useEffect } from "react";
export const MContext = React.createContext();
const MyProvider = (props) => {
   //check loading fetch api
   const [loading, setLoading] = useState(false);
   const [categories,setCategories]=useState([]);
   let componentMount = true;
  
   //using useEffect call API
   useEffect(() => {
    //  if(!componentMount && !loading){
    //       componentMount = true;
    //  }
     const fetchData = async () => {
       setLoading(true);
       const _categories = await fetch(`https://hoanguyenit.com/api/categories`);
       if (componentMount) {
         // convert data to json
         console.log("chạy call")
         const result = await _categories.json();
         console.log("co",result.multiple.length)
         setCategories(result.multiple)
         setLoading(false)
       }
  
     }

     // call the function
     fetchData().catch(console.error);
  
     return () => {
       //remove all memory
       console.log("clear 1")
       componentMount = false;

     }
   }, [])

  return(
         !loading && <MContext.Provider value={{categories}}>{props.children}</MContext.Provider>
  )

};
export default MyProvider;
