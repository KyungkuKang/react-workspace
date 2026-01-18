import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMemberListThunk, deleteMemberThunk } from "../service/authThunk";
import HeaderCom from "../components/common/HeaderCom";

const MemberListCon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { list, loading } = useSelector((state) => state.member);
    console.log("member list:", list);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
            return;
        }
        dispatch(getMemberListThunk());
    }, [isLoggedIn, dispatch, navigate]);

    if (loading) return <div>로딩중...</div>;

    return (
        <>
            <HeaderCom />
            <div style={{ paddingTop: "120px"}}>
                <ul>
                    {list.map((user, index) => (
                    <li key={index}>
                        <span
                            style={{ cursor: "pointer", marginRight: "10px" }}
                            onClick={() => navigate(`/members/${user.username}`)}
                        >
                            {user.username}
                        </span>
                        <button
                            onClick={() => dispatch(deleteMemberThunk(user.username))}
                        >
                            삭제
                        </button>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MemberListCon;