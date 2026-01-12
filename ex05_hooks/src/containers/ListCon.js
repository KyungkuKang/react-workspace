import { useEffect, useReducer, useState } from "react";
import ListCom from "../conponents/ListCom";
import { getList } from "../service/member";
import { initalData, initalState, reducer } from "../moduls/member_red";

const ListCon = () => {
    /*
    console.log("11111 실행")
    try{
        const data = JSON.parse('{"test":111}')
        console.log("data : ", data)
    }catch( err ){
        console.log("문제 발생")
    }
    console.log("다음 문장 실행")
    */
    //const [user, setUser] = useState(null);
    const [state, dispatch] = useReducer(reducer, initalState);
    useEffect( ()=> {
        try{
            dispatch({type:"LOADING"})
            //setTimeout(()=>{
                console.log("2초후")
                const data = getList();     
                //data = [{},{},{}]
                //setUser( data )
                dispatch({type:"LIST", data })
                dispatch({type:"FINISHED"})
            //},2000)
            //throw new Error("에러 발생")
        }catch( e ){
            console.log(e)
            console.log( e.toString() )
            dispatch({type:"ERROR", msg: e.toString() })
        }

        
    }, [])
    console.log( state )
    return(<>
        <ListCom error={state.error} data={state.data} loading={state.loading} />
    </>)
}
export default ListCon;