import { useReducer } from "react";
import ReducerCom from "../components/ReducerCom"
const reducer = (state, action) => {
    console.log("setNum state : ", state )
    console.log("setNum action : ", action )
    console.log("setNum action : ", action.type )
    switch(action.type){
        case "up" : return {...state, value:state.value + 10};
        case "down" : return state.value - 5;
        default : return state;
    }
    //return state + 1;
}
const initalState = { value : 0 , name : "오충환" }
const ReducerCon = () => {
    //const [num, setNum] = useState(0)
    const [state, dispatch] = useReducer(reducer, initalState);
    const onClick = () => { dispatch({type:"up"}); }
    const onDown = () => { dispatch({type:"down"}); }
    return(<>
        <ReducerCom onDown={onDown} state={state} onClick={onClick} />
    </>)
}
export default ReducerCon;