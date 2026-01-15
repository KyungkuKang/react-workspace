import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledInput from "./common/StyleInput";
import StyleForm from "./common/StyleForm";
import StyledButton from "./common/StyleButton";
const AuthBlock = styled.div`
    position: absolute; left: 0; top: 0; bottom: 0; right: 0; background-color: rgba(0,0,0,0.1);
`;
const LoginBox = styled.div`
    position: absolute; width: 360px; min-height: 200px; top: 150px; left: calc(50% - 180px);
    background-color: white; padding-top: 20px; box-shadow: 0 0 8px rgba(0,0,0,0.3);
    border-radius: 5px;
    .logo-area {
        text-align: center; font-weight: bold; letter-spacing: 5px; font-size: 20px;
        border-bottom: 1px dotted olive; padding-bottom: 5px; width: 50%; margin: 0 auto;
        a{ color : darkcyan; &:hover { color : cyan;}}
    }
`;
const LoginCom = () => {
    return(<AuthBlock>
        <LoginBox>
            <div className="logo-area">
                <Link to="/">탱이냥 이동</Link>
            </div>
            <StyleForm>
                <StyledInput placeholder="input username"/>
                <StyledInput placeholder="input password"/>
                <StyledButton width="100%" background={["178,235",0.5]}>로그인</StyledButton>
            </StyleForm>
        </LoginBox>
    </AuthBlock>)
}
export default LoginCom;