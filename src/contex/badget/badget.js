import react,{useState} from "react";
export const Badgetcontext = react.createContext();
const BadgetcontextProvider =(props)=>{
    const[badget,setbadget]=useState(0);
    const badgetplus=()=>{
        setbadget(badget +1)
    }
    return(
        <Badgetcontext.Provider value={{badget,badgetplus,setbadget}}>
            {props.children}
        </Badgetcontext.Provider>
    )
}
export default BadgetcontextProvider;