//using JSX
import { useState } from "react";
const Button = ()=>{
    const [state,setState] = useState(0);
    return <>
    <div>{state}</div>
    <button onClick={()=>setState(prev=>prev+1)}>INCREMENT - REACT COMPONENT</button>
    </>
}

export default Button;