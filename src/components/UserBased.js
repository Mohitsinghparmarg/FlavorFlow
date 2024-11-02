import { useState } from "react";



export const UserBased = (props) => {
          
    const {info} = props;
    const [count,setCount] = useState(0);
     return (
              
           <div>
               <h1> Name : {info}</h1>
               <button onClick={()=>{
                    setCount(count+1);
               }}>click me</button>
               <h2> Fun-count : {count}</h2>
                
           </div>
     )
}