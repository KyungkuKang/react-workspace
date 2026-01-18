import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import { updateMemberThunk } from "../service/authThunk";
import { useState, useEffect } from "react";

const MemberDetailCon = () => {
    const dispatch = useDispatch();
    const [editUser, setEditUser] = useState(null);
    const { username } = useParams();
    const navigate = useNavigate();

    const { list } = useSelector((state) => state.member);

    const member = list.find((user) => user.username === username)
        useEffect(() => {
            if (member) {
                setEditUser(member);
            }
        },[member]);

    if (!member){
        return(
            <>
                <HeaderCom />
                <div style={{ paddingTop:"120px"}}>
                    <p>회원 정보를 찾을 수 없습니다.</p>
                    <button onClick={() => navigate("/members")}>
                        목록으로
                    </button>
                </div>
            </>
        );
    }
    return (
    <>
        <HeaderCom />
        <div style={{ paddingTop:"120px"}}>
            <h2>회원 상세</h2>
            {editUser && (
                <>
                    <p>아이디: {editUser.username}</p>
                    <p>비밀번호:
                        <input
                            value={editUser.password}
                            onChange={(e) => 
                                setEditUser({
                                    ...editUser, password: e.target.value,
                                })
                            }
                        />
                    </p>
                    <p>권한: {editUser.role}</p>
                </>
            )}
            <button
                onClick={() => {
                    dispatch(updateMemberThunk(editUser));
                    navigate("/members")
                }}
            >
                저장
            </button>
            <button onClick={() => navigate("/members")}>
                목록으로
            </button>
        </div>
    </>
    );
};

export default MemberDetailCon;
