import { useContext, useEffect, useReducer, useState } from "react";
import ListCom from "../components/ListCom";
import { getList } from "../service/member";
import { initalData, initalState, reducer } from "../moduls/member_red";
import { TestContext } from "../store/TestContext";

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

    const {data} = useContext( TestContext )

    useEffect( ()=> {
        dispatch({type:"LOADING"})
        try{
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
        data.num : {data.number}<br/>
        <ListCom error={state.error} data={state.data} loading={state.loading} />
    </>)
}
export default ListCon;