import styled from 'styled-components';
import { Link, NavLink} from "react-router-dom";

export const Main = styled.main`
    padding: 20px;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
`;

export const Img = styled.img`
display: block;
width: 100%;
height: auto;
`;

export const Div1 = styled.div`
max-width: 250px;
`;

export const Div2 = styled.div`
padding-left: 20px;
`;

export const Button = styled.button`
margin-bottom: 10px;
    background-color: darkgoldenrod;
    border: none;
    border-radius: 5px;
    height: 25px;
    opacity: 0.8;

    &:hover, &:focus {
    opacity: 1;
  }
    `;

export const LinkStyled = styled(Link)`
color: black;
`;

export const LinkStyledAddIn = styled(NavLink)`
color: black;
text-decoration: none;
font-weight: 500;

&.active {
    color: blue;
}
`;

export const Uldet = styled.ul`
list-style: none;
`;

