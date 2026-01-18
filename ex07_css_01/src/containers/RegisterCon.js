import { useDispatch, useSelector } from "react-redux"
import { data, useNavigate } from "react-router-dom";
import { registerThunk } from "../service/authThunk";
import RegisterCom from "../components/RegisterCom";

const RegisterCon = () => {
    const dispatch = useDispatch();
    const navigave = useNavigate();
    const { loading } = useSelector((state) => state.auth);

    const onSubmit = (user) => {
        dispatch(registerThunk(user)).then(() => {
            navigave("/login");
        });
    };

    return <RegisterCom onSubmit={onSubmit} loading={loading} />;
};

export default RegisterCon;