import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const Header = styled.header`
    padding: 20px;
    background-color: burlywood;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 20px;
        
`;

export const LinkStyled = styled(NavLink)`
color: black;
text-decoration: none;
font-weight: 500;
:not(:last-child) {
margin-right: 15px;
}

&.active {
    color: blue;
}    
`;