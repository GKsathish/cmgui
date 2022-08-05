import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #000080;
height: 100vh;
width:200px;
padding-left:60px;
display: flex;
flex-direction:row;

justify-content: flex-start;

z-index: 12;
`;

export const NavLink = styled(Link)`
color: #FFFFFF;
font-size:20px;
display: flex;
justify-content:center;
align-items: center;
text-decoration: none;
padding:  10px;
height: 20px;
margin:20px;
cursor: pointer;
&.active {
	color: orange;
}
`;


export const NavMenu = styled.div`
display: flex;
flex-direction:column;
height:100%;
width:30px;
color:#fff;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
