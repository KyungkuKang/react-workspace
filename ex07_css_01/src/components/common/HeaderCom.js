import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";
const WrapBlock = styled.div`
    position: fixed; 
    z-index : 1;
    background-color : white;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;
const StyleHeader = styled.header`
    margin: 0 auto; width: 1100px;
    display: flex; height: 100px; align-items: center;
`;
const StyleTitle = styled.h1`
    width: 200px;
    .link {color: black;}
    .link:hover { color: gray;}
`;
const StyleNav = styled.nav`
    display: flex; justify-content: space-between; width: 100%;
    ul {display: flex; }; ul li { margin-right: 30px ;}; 
    .menu li a { font-size: 20px; font-weight: bold;};
    a {color: black;};
    a:hover { color: gray;};
`;
const HeaderCom = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, username } = useSelector((state) => state.auth);
    const onLogout = () => {
        dispatch(logout());
    };
    return (<>
        <WrapBlock>
            <StyleHeader>
                <StyleTitle>
                    <Link to="/" className="link">탱이냥</Link>
                </StyleTitle>
                <StyleNav>
                    <ul className="menu">
                        <li><Link to="/">사료</Link></li>
                        <li><Link to="/">간식</Link></li>
                    </ul>
                    <ul>
                        {!isLoggedIn ? (
                            <li><Link to ="/login">LOGIN</Link></li>
                        ) : (
                        <>
                            <li><Link to="/members">회원목록</Link></li>
                            <li 
                            onClick={onLogout} 
                            style={{ cursor: "pointer"}}
                            >
                            LOGOUT ({username})
                            </li>
                        </>
                        )}
                        <li><Link to="/register">회원가입</Link></li>
                    </ul>
                </StyleNav>
            </StyleHeader>
        </WrapBlock>
    </>)
}
export default HeaderCom;