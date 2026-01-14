let data_set = [
    {id:"aaa", pwd:"aaa", name:"오경준", addr : "지축역"},
    {id:"bbb", pwd:"bbb", name:"김지환", addr : "삼송역"},
    {id:"ccc", pwd:"ccc", name:"오충환", addr : "마포구"}
]
//export const getList = () => data_set;
export const getList = () => fetch("http://localhost:4000/mem");
export const register = ( user ) => {
    data_set = data_set.concat(user);
    return 1; //회원 가입 성공
}
export const loginCheck = (id, pwd) => {
    const data = data_set.filter( d=> d.id === id)
    //일치하는id:[{id:"aaa", pwd:"aaa", name:"오경준", addr : "지축역"}]
    //없는경우 : []
    if(data.length !== 0){
        if(data[0].pwd === pwd){
            return 0; //인증 성공
        }else{
            return 1; //비밀번호 틀림
        }
    }
    return -1; //존재하지 않는 id
}