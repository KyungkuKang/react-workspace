import styled , {css} from "styled-components";
//const StyleButton = styled.button ``;
export default styled.button`
    width : 300px; height : 50px;
    background-color : blue; color : white;
    border : none; border-radius : 5px;
    cursor : pointer;
    ${ props => css``}
    
    /*
        ${ props => props.width && css `
            width : ${props.width};    
        ` }
        ${ props => props.background && css `
            background-color : rgba(${props.background[0]}, 
                                        ${props.background[1] });
        `}
    */
    &:hover {
        background-color : darkblue;
    ${ props => props.background && css `
            background-color : rgba(${props.background[0]}, 
                                        ${props.background[1] + 0.4});
        `}
    }
`;