const ReduxCom = ({value, upClick, downClick}) => {
    return (<>
    cnt.value : {value}<br/>
    <button onClick={upClick}>upClick</button>
    <button onClick={downClick}>downClick</button>
    </>)
}
export default ReduxCom;