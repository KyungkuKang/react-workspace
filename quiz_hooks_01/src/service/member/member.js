let data_set = [
    {id:"aaa", pwd:"aaa", name:"오경준", addr:"지축역"},
    {id:"bbb", pwd:"bbb", name:"김지환", addr:"삼송역"},
    {id:"ccc", pwd:"ccc", name:"오충환", addr:"마포구"},
]
//필터( data => data.name === 이름 )
//export getList = () => data_set
const path = "http://localhost:4000/mem";
export function getList(){
    //const getData = fetch(path);
    return data_set;
    //return getData;
}
//const path = "http://localhost:4000/mem";
export const getOne = ( id ) => 
    data_set.filter( data => data.id === id )[0]
    //fetch(path+"/"+id)//http://localhost:4000/mem/ccc-s
/*
export function getOne( id ){
    //console.log("svc one id : ", id)
    return data_set.filter( data => data.id === id )[0]
    //return "bbb 데이터 검색 결과"
}
*/

export const memberDelete = (delId) => {
    data_set = data_set.filter( data => data.id !== delId )
}
//http://localhost:4000/mem
export const register = ( user ) => {
    //delete user.pwdChk; // 특정 키 삭제
    data_set = data_set.concat(user)
    //{id:값, name:값, pwd:값}
    /*
    fetch(path,{
        method : "post",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify( user )
    })
        */
}
export const modify = ( user ) => {
    data_set = data_set.filter( data => data.id !== user.id )
    data_set = data_set.concat( user )
}