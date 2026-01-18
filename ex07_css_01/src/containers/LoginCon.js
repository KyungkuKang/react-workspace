import { loginThunk } from "../service/authThunk";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword } from "../redux/inputSlice";
import HeaderCom from "../components/common/HeaderCom"
import IndexCom from "../components/IndexCom"
import LoginCom from "../components/LoginCom";

const LoginCon = () => {
    const dispatch = useDispatch();
    const input = useSelector((state) => state.input);

    const onChangeUsername = (e) => {
        dispatch(setUsername(e.target.value));
    };
    const onChangePassword = (e) => {
        dispatch(setPassword(e.target.value));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(loginThunk(input));
    };

    return (<>
        <HeaderCom />
        <LoginCom 
        input={input}
        onChangeUsername={onChangeUsername}
        onChangePassword={onChangePassword}
        onSubmit={onSubmit}
        />
    </>);
};
export default LoginCon;