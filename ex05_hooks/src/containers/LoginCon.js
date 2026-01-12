import { useReducer } from "react";
import LoginCom from "../conponents/LoginCom";
import { initalLogin, initalState, reducer } from "../moduls/member_red";

const LoginCon = () => {
    //[input, setInput] = useState({id:"",pwd:""})
    const [ state, dispatch] = useReducer(reducer,initalState)
    const onChange = ( e ) => {
        dispatch({
            type:"CHANGE_INPUT", 
            value:e.target.value,
            name:e.target.name,
            form : "login"
        });
    }
    return (<>
    <LoginCom state={state} onChange={onChange}/>
    </>)
}
export default LoginCon;